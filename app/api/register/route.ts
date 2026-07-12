import { NextResponse } from "next/server";
import { Resend } from "resend";
import { registrationEventOptions } from "@/lib/event-config";
import type { RegistrationPayload } from "@/lib/types";

// Recipient for registration submissions. Override via env if needed.
const TO_EMAIL = process.env.REGISTRATION_TO_EMAIL || "limszekee702@gmail.com";

// Sender address. Must be on a domain verified with Resend, or use their
// shared test sender "onboarding@resend.dev" during development.
// See README.md "Email setup" for details.
const FROM_EMAIL = process.env.REGISTRATION_FROM_EMAIL || "ROBO ARENA 2026 <onboarding@resend.dev>";

function eventLabel(value: string): string {
  return registrationEventOptions.find((option) => option.value === value)?.label ?? value;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(payload: Partial<RegistrationPayload>): string | null {
  const required: (keyof RegistrationPayload)[] = [
    "participantName",
    "age",
    "schoolName",
    "event",
    "guardianName",
    "contactNumber",
    "email",
  ];

  for (const field of required) {
    if (!payload[field] || String(payload[field]).trim() === "") {
      return `Missing required field: ${field}`;
    }
  }

  const age = Number(payload.age);
  if (!Number.isInteger(age) || age < 5 || age > 12) {
    return "Age must be a number between 5 and 12.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(payload.email as string)) {
    return "Please provide a valid email address.";
  }

  if (!registrationEventOptions.some((option) => option.value === payload.event)) {
    return "Please select a valid event.";
  }

  return null;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Registration is temporarily unavailable: the site is missing its email configuration (RESEND_API_KEY). Please contact the organiser directly, or try again later.",
      },
      { status: 500 }
    );
  }

  let body: Partial<RegistrationPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const data = body as RegistrationPayload;

  const rows: [string, string][] = [
    ["Participant Name", data.participantName],
    ["Age", data.age],
    ["School Name", data.schoolName],
    ["Event", eventLabel(data.event)],
    ["Team Partner Name", data.teamPartnerName || "N/A"],
    ["Parent/Guardian Name", data.guardianName],
    ["Contact Number", data.contactNumber],
    ["Email", data.email],
    ["Notes/Questions", data.notes || "N/A"],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #e2e8f0;">${escapeHtml(
          label
        )}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;color:#0f172a;">
      <h2 style="margin-bottom:4px;">New ROBO ARENA 2026 Registration</h2>
      <table style="border-collapse:collapse;width:100%;max-width:520px;">${htmlRows}</table>
    </div>
  `;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: data.email,
      subject: `New Registration: ${data.participantName} (${eventLabel(data.event)})`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your registration right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Registration email failed:", err);
    return NextResponse.json(
      { error: "Something went wrong while sending your registration. Please try again shortly." },
      { status: 500 }
    );
  }
}
