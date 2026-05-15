import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, budget, message } = await req.json();

  if (!name || !email || !budget || !message) {
    return NextResponse.json({ error: "Alle Felder sind Pflichtfelder." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Kontaktformular <onboarding@resend.dev>",
    to: "noah@dasilveira.de",
    replyTo: email,
    subject: `Neue Anfrage von ${name} — Budget: ${budget}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #18181b;">
        <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 24px;">Neue Website-Anfrage</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-size: 13px; color: #71717a; width: 120px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-size: 13px; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-size: 13px; color: #71717a;">E-Mail</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-size: 13px; font-weight: 500;">
              <a href="mailto:${email}" style="color: #18181b;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-size: 13px; color: #71717a;">Budget</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e4e4e7; font-size: 13px; font-weight: 500;">${budget}</td>
          </tr>
        </table>

        <div style="margin-top: 24px;">
          <p style="font-size: 13px; color: #71717a; margin-bottom: 8px;">Beschreibung</p>
          <p style="font-size: 14px; line-height: 1.6; white-space: pre-wrap; background: #f4f4f5; padding: 16px; border-radius: 8px;">${message}</p>
        </div>

        <p style="margin-top: 32px; font-size: 12px; color: #a1a1aa;">
          Antworten Sie direkt auf diese E-Mail — die Antwort geht an ${email}.
        </p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
