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

export async function submitContactForm(payload: ContactFormPayload): Promise<ContactFormResult> {
  const recipient = siteContent.contact.formRecipientEmail;

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        phone: payload.number ?? "",
        service: payload.subject ?? "",
        message: payload.message,
        _subject: `New enquiry from ${siteContent.brand.name}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: "Unable to send your enquiry. Please try again or email us directly.",
      };
    }

    const result = (await response.json()) as { success?: string; message?: string };

    if (result.success === "false") {
      return {
        ok: false,
        message: result.message ?? "Unable to send your enquiry. Please try again.",
      };
    }

    return {
      ok: true,
      message: "Thank you! Your enquiry has been sent successfully.",
    };
  } catch {
    return {
      ok: false,
      message: "Network error. Please check your connection and try again.",
    };
  }
}
