import { Resend } from "resend";
import type { Submission } from "./schema";
import { format } from "date-fns";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendOwnerNotification(submission: Submission): Promise<boolean> {
  try {
    const serviceLabel = submission.service || "Not specified";
    const subject = `New website enquiry from ${submission.name} (${serviceLabel})`;

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
  body { font-family: Arial, sans-serif; color: #1a1a2e; max-width: 600px; margin: 0 auto; }
  .header { background: #c0392b; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
  .body { background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px; }
  .field { margin-bottom: 16px; }
  .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
  .value { font-size: 15px; margin-top: 4px; }
  .message-box { background: white; border: 1px solid #e0e0e0; border-radius: 4px; padding: 12px; margin-top: 4px; }
  .meta { font-size: 11px; color: #999; margin-top: 16px; padding-top: 16px; border-top: 1px solid #e0e0e0; }
</style></head>
<body>
  <div class="header">
    <h2 style="margin:0">New Enquiry — Garage Door Group</h2>
    <p style="margin:4px 0 0;opacity:0.85">${format(submission.createdAt, "d MMMM yyyy, h:mm a")}</p>
  </div>
  <div class="body">
    <div class="field">
      <div class="label">Name</div>
      <div class="value">${submission.name}</div>
    </div>
    <div class="field">
      <div class="label">Mobile</div>
      <div class="value"><a href="tel:${submission.mobile}">${submission.mobile}</a></div>
    </div>
    ${submission.email ? `
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${submission.email}">${submission.email}</a></div>
    </div>` : ""}
    <div class="field">
      <div class="label">Service Interest</div>
      <div class="value">${serviceLabel}</div>
    </div>
    <div class="field">
      <div class="label">Message</div>
      <div class="message-box">${submission.message.replace(/\n/g, "<br>")}</div>
    </div>
    <div class="meta">
      Submitted from: ${submission.sourcePage || "website"} &bull;
      IP: ${submission.ip || "unknown"} &bull;
      ID: ${submission.id}
    </div>
  </div>
</body>
</html>`;

    await getResend().emails.send({
      from: `Garage Door Group <noreply@${process.env.SENDING_DOMAIN || "garagedoorgroup.co.nz"}>`,
      to: process.env.OWNER_EMAIL || "chris@gdgroup.co.nz",
      replyTo: submission.email || undefined,
      subject,
      html,
    });

    return true;
  } catch (error) {
    console.error("[email] Failed to send owner notification:", error);
    return false;
  }
}

export async function sendAutoReply(submission: Submission): Promise<void> {
  if (!submission.email) return;
  try {
    await getResend().emails.send({
      from: `Garage Door Group <noreply@${process.env.SENDING_DOMAIN || "garagedoorgroup.co.nz"}>`,
      to: submission.email,
      subject: "We've received your message — Garage Door Group",
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #c0392b; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
    <h2 style="margin:0">Thanks for getting in touch!</h2>
  </div>
  <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
    <p>Hi ${submission.name},</p>
    <p>We've received your message and will get back to you within 48 hours.</p>
    <p>In the meantime, if it's urgent you can call Chris directly on <strong><a href="tel:021906966">021 906 966</a></strong>.</p>
    <p style="margin-top: 32px;">Kind regards,<br><strong>Chris</strong><br>Garage Door Group<br>North Auckland</p>
  </div>
</body>
</html>`,
    });
  } catch (error) {
    console.error("[email] Failed to send auto-reply:", error);
  }
}
