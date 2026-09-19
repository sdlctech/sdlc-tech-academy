import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Gmail's SMTP handshake can take longer than Vercel's default 10s function
// timeout, especially on a cold start — extend it so the response always
// makes it back to the browser instead of the platform killing the function
// after the email has already sent.
export const maxDuration = 30;

const NOTIFY_EMAIL = "info@sdlctechacademy.com";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body: ContactPayload = await request.json();
  const { name, email, phone, course, message } = body;

  if (!name || !email || !phone || !course) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
    console.error(
      "SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASSWORD are not configured. See .env.local.example."
    );
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  try {
    const port = Number(smtpPort);
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 15000,
    });

    await transporter.sendMail({
      from: `"SDLC Tech Academy Website" <${smtpUser}>`,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New Enquiry: ${course} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Course Interested In: ${course}`,
        `Message: ${message || "-"}`,
      ].join("\n"),
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Course Interested In:</strong> ${escapeHtml(course)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message || "-")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
