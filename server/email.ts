import nodemailer from 'nodemailer';

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
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'talhaarshad010@gmail.com',
      pass: process.env.EMAIL_PASSWORD || 'your-app-password'
    }
  });
};

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: params.from,
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully via Nodemailer');
    return true;
  } catch (error) {
    console.error('Nodemailer email error:', error);
    return false;
  }
}

export function createContactEmailHTML(name: string, email: string, subject: string, message: string): string {
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
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
      </div>
      <p style="color: #666; font-size: 14px;">This email was sent from your portfolio contact form.</p>
    </div>
  `;
}