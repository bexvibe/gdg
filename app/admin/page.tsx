import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { submissions } from "@/lib/schema";
import { desc } from "drizzle-orm";
import AdminClient from "./AdminClient";

async function getSubmissions() {
  try {
    return await db.select().from(submissions).orderBy(desc(submissions.createdAt)).limit(500);
  } catch {
    return [];
  }
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin_auth");

  if (auth?.value !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login");
  }

  const data = await getSubmissions();
  return <AdminClient submissions={data} />;
}
