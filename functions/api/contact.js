import nodemailer from "nodemailer";

export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  try {
    const body = await context.request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const number = String(body?.number ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Please provide your name, email, and enquiry message.",
        }),
        { status: 400, headers: corsHeaders },
      );
    }

    const env = context.env;
    const host = env.SMTP_HOST;
    const user = env.SMTP_USER;
    const pass = env.SMTP_PASS;
    const recipient = env.CONTACT_RECIPIENT_EMAIL || "mskumardesigner@gmail.com";

    if (!host || !user || !pass) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Email service is not configured. Please set SMTP environment variables.",
        }),
        { status: 503, headers: corsHeaders },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(env.SMTP_PORT || 587),
      secure: env.SMTP_SECURE === "true",
      auth: { user, pass },
    });

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

    await transporter.sendMail({
      from: env.SMTP_FROM || user,
      to: recipient,
      replyTo: email,
      subject: mailSubject,
      text: mailText,
    });

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Thank you! Your enquiry has been sent successfully. We will contact you soon.",
      }),
      { status: 200, headers: corsHeaders },
    );
  } catch (error) {
    console.error("Contact form email failed:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Sorry, we could not send your enquiry right now. Please try again later.",
      }),
      { status: 500, headers: corsHeaders },
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
