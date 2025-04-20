// /pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  const { name, email, message } = req.body;
  

  const transporter = nodemailer.createTransport({
    service: "Gmail", // or use SMTP config
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your app password
    },
  });

  console.log("Transporter verifying...");
transporter.verify((error: any, success: any) => {
  if (error) {
    console.log("Transport error:", error);
  } else {
    console.log("Server is ready to take messages");
  }
});

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER, // your inbox
      subject: "New Contact Message",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("email error:", error);
    res.status(500).json({ error: error.message || "Email sending failed." });
  }
}
