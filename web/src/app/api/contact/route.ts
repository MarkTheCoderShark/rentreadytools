import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_FROM = "noreply@notyoungfashion.com";
const DEFAULT_TO = "markthecodershark@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const reason = typeof body.reason === "string" ? body.reason.trim() : "General";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const source = typeof body.source === "string" ? body.source.trim() : "contact";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    // Instantiate lazily so `next build` doesn't require RESEND_API_KEY.
    const resend = new Resend(process.env.RESEND_API_KEY);

    const from = process.env.RESEND_FROM || DEFAULT_FROM;
    const to = process.env.RESEND_TO || DEFAULT_TO;

    await resend.emails.send({
      from,
      to,
      subject: `[RentReadyTools] ${reason}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Reason: ${reason}`,
        `Source: ${source}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
