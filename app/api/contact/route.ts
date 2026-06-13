import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Ashesh Contact <onboarding@resend.dev>",
      to: process.env.TO_EMAIL!,
      replyTo: email,
      subject: subject || `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}