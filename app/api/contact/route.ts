export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { submissions } from "@/lib/schema";
import { contactSchema } from "@/lib/validations";
import { sendOwnerNotification, sendAutoReply } from "@/lib/email";
import { eq } from "drizzle-orm";

// Simple in-memory rate limiter (per-IP, resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", fields: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { honeypot, ...data } = parsed.data;

  // Write to DB first — this is the source of truth
  let submission;
  try {
    const [row] = await db
      .insert(submissions)
      .values({
        name: data.name,
        mobile: data.mobile,
        email: data.email || null,
        service: data.service || null,
        message: data.message,
        sourcePage: (body as Record<string, string>).sourcePage || null,
        ip,
        userAgent: req.headers.get("user-agent") || null,
        emailSent: false,
      })
      .returning();
    submission = row;
  } catch (error) {
    console.error("[contact] DB write failed:", error);
    return NextResponse.json(
      { error: "Failed to save your message. Please try again." },
      { status: 500 }
    );
  }

  // Send email — failure doesn't affect the response to the user
  const emailSent = await sendOwnerNotification(submission);

  if (emailSent) {
    try {
      await db
        .update(submissions)
        .set({ emailSent: true })
        .where(eq(submissions.id, submission.id));
    } catch {
      // Non-fatal
    }
    sendAutoReply(submission).catch(console.error);
  } else {
    console.error(`[contact] Email failed for submission ${submission.id} — lead is safe in DB`);
  }

  return NextResponse.json({ success: true });
}
