import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Semua kolom (Nama, Email, Pesan) wajib diisi." },
        { status: 400 }
      );
    }

    const targetEmail = process.env.CONTACT_EMAIL || "okearya.projects@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [targetEmail],
      replyTo: email,
      subject: `💼 Pesan Baru Portfolio dari ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0b0f17; color: #f1f5f9; padding: 32px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(255, 255, 255, 0.1);">
          <div style="border-bottom: 2px solid #06b6d4; padding-bottom: 14px; margin-bottom: 24px;">
            <h2 style="color: #06b6d4; margin: 0; font-size: 20px;">Pesan Baru dari Website Portfolio</h2>
            <p style="color: #94a3b8; font-size: 13px; margin: 4px 0 0 0;">Pengunjung mengirim pesan melalui formulir Get in Touch</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 100px;"><strong>Nama:</strong></td>
              <td style="padding: 8px 0; color: #f8fafc; font-size: 14px; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #38bdf8; font-size: 14px;">
                <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="background-color: #111827; border-left: 4px solid #06b6d4; padding: 18px; border-radius: 8px; margin-bottom: 28px;">
            <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">Isi Pesan:</p>
            <p style="margin: 0; line-height: 1.6; color: #e2e8f0; font-size: 14px; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 20px;">
            <a href="mailto:${email}" style="display: inline-block; background-color: #06b6d4; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: bold; box-shadow: 0 4px 14px rgba(6, 182, 212, 0.3);">
              Balas Pesan ke ${email}
            </a>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Gagal mengirim email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("Unexpected error in /api/contact:", error);
    const err = error as Error;
    return NextResponse.json(
      { success: false, error: err.message || "Terjadi kesalahan internal." },
      { status: 500 }
    );
  }
}
