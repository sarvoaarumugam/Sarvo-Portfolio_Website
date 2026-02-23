import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_FROM_EMAIL}>`,
      to: 'sarvoaarumugam@gmail.com',
      replyTo: email,
      subject: `New message from ${name} via Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0f0f1a; color: #e2e8f0; border-radius: 12px;">
          <h2 style="color: #a855f7; margin-bottom: 24px;">New Portfolio Contact Message</h2>
          <p style="margin: 8px 0;"><strong style="color: #94a3b8;">From:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong style="color: #94a3b8;">Email:</strong> <a href="mailto:${email}" style="color: #22d3ee;">${email}</a></p>
          <hr style="border: 1px solid #1e293b; margin: 20px 0;">
          <h3 style="color: #94a3b8; margin-bottom: 12px;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          <hr style="border: 1px solid #1e293b; margin: 20px 0;">
          <p style="color: #475569; font-size: 12px;">Sent from your portfolio contact form</p>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
