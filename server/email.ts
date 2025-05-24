import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

// Create transporter with Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "d1.my-control-panel.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD);
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER, // 👈 force this to match your SMTP login
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully via Nodemailer");
    return true;
  } catch (error) {
    console.error("Nodemailer email error:", error);
    return false;
  }
}

export function createContactEmailHTML(
  name: string,
  email: string,
  subject: string,
  message: string
): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 20px;">
          <strong>Message:</strong>
          <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
            ${message.replace(/\n/g, "<br>")}
          </p>
        </div>
      </div>
      <p style="color: #666; font-size: 14px;">This email was sent from your portfolio contact form.</p>
    </div>
  `;
}
