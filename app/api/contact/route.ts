import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { adminEmailTemplate } from "@/lib/email-templates/admin-email-template";
import { userEmailTemplate } from "@/lib/email-templates/user-email-template";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      inquiryType,
      subject,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    const adminEmail = process.env.SMTP_USER;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT);

    if (!adminEmail || !smtpHost || !smtpPass) {
      console.error("Contact email SMTP configuration is incomplete.");
      return NextResponse.json(
        { success: false, error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: adminEmail,
        pass: smtpPass,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    // Send admin notification + user confirmation
    await Promise.all([
      // 1. Email to AGOO Clinic
      transporter.sendMail({
        from: `"AGOO Clinic Website" <${adminEmail}>`,
        to: adminEmail,
        replyTo: email,
        subject: `New [${inquiryType || "General Inquiry"}] from ${name} – AGOO Clinic: ${subject}`,
        html: adminEmailTemplate({
          name,
          email,
          phone,
          inquiryType,
          subject,
          message,
        }),
      }),

      // 2. Confirmation email to patient
      transporter.sendMail({
        from: `"AGOO Clinic" <${adminEmail}>`,
        to: email,
        subject: `We Received Your Message, ${name}! – AGOO Clinic`,
        html: userEmailTemplate({
          name,
          email,
          inquiryType,
          subject,
          message,
        }),
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("AGOO Clinic contact email error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}