import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const formattedContent = `
==================================================
PROJECT DISCOVERY BLUEPRINT
==================================================
TICKET ID   : ${payload.ticketId}
CLIENT NAME : ${payload.clientName}
EMAIL       : ${payload.email}
COMPANY     : ${payload.company || 'N/A'}
PHONE       : ${payload.phone || 'N/A'}
WEBSITE     : ${payload.website || 'N/A'}

--------------------------------------------------
SCOPE SUMMARY
--------------------------------------------------
PROJECT TYPE: ${payload.projectType}
OBJECTIVES  : ${payload.objectives?.join(', ') || 'None'}
FEATURES (${payload.featuresCount}):
${payload.featuresList?.map((f: string) => `  - ${f}`).join('\n') || '  None'}

INTEGRATIONS: ${payload.integrations?.join(', ') || 'None'}
TIMELINE    : ${payload.timeline}
INVESTMENT  : ${payload.investment}
READINESS   : ${payload.readiness}

--------------------------------------------------
ADDITIONAL NOTES
--------------------------------------------------
${payload.additionalNotes || 'None'}
==================================================
`;

    // Email Transporter Config (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to agency admin & client confirmation
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"Blueprint Engine" <${process.env.SMTP_USER}>`,
        to: `${process.env.ADMIN_EMAIL || process.env.SMTP_USER}, ${payload.email}`,
        subject: `New Project Blueprint Received [${payload.ticketId}] - ${payload.clientName}`,
        text: formattedContent,
      });
    }

    return NextResponse.json({
      success: true,
      ticketId: payload.ticketId,
      message: 'Email blueprint sent successfully!',
    });
  } catch (error) {
    console.error('Email Submission Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send blueprint email' },
      { status: 500 }
    );
  }
}