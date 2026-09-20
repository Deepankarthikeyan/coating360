import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);
const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "team@aghcoating360.com";
const ccRecipient = process.env.CONTACT_CC_EMAIL || "mohan@aghcoating360.com";

app.use(cors());
app.use(express.json({ limit: "32kb" }));

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const name = String(req.body?.name ?? "").trim();
  const email = String(req.body?.email ?? "").trim();
  const number = String(req.body?.number ?? "").trim();
  const subject = String(req.body?.subject ?? "").trim();
  const message = String(req.body?.message ?? "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      message: "Please provide your name, email, and enquiry message.",
    });
  }

  const transporter = createTransporter();

  if (!transporter) {
    return res.status(503).json({
      ok: false,
      message: "Email service is not configured. Please set SMTP environment variables.",
    });
  }

  const mailSubject = `New enquiry from AGH Coating360${subject ? ` - ${subject}` : ""}`;
  const mailText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${number || "Not provided"}`,
    `Service: ${subject || "Not selected"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      cc: ccRecipient,
      replyTo: email,
      subject: mailSubject,
      text: mailText,
    });

    return res.json({
      ok: true,
      message: "Thank you! Your enquiry has been sent successfully. We will contact you soon.",
    });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return res.status(500).json({
      ok: false,
      message: "Sorry, we could not send your enquiry right now. Please try again later.",
    });
  }
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});
