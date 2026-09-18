import siteContent from "../data/siteContent";

export type ContactFormPayload = {
  name: string;
  email: string;
  number?: string;
  subject?: string;
  message: string;
};

export type ContactFormResult = {
  ok: boolean;
  message: string;
};

export function submitContactForm(payload: ContactFormPayload): ContactFormResult {
  const recipient = siteContent.contact.formRecipientEmail;
  const subject = `New enquiry from ${siteContent.brand.name}${payload.subject ? ` - ${payload.subject}` : ""}`;
  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.number || "Not provided"}`,
    `Service: ${payload.subject || "Not selected"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;

  return {
    ok: true,
    message: `Your email app is opening to send the enquiry to ${recipient}. Please tap Send in your email app to complete it.`,
  };
}
