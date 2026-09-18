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

const apiBase = import.meta.env.VITE_API_BASE_URL ?? "";

export async function submitContactForm(payload: ContactFormPayload): Promise<ContactFormResult> {
  try {
    const response = await fetch(`${apiBase}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as ContactFormResult;

    if (!response.ok) {
      return {
        ok: false,
        message: data.message || "Sorry, we could not send your enquiry right now. Please try again later.",
      };
    }

    return data;
  } catch {
    return {
      ok: false,
      message: "Network error. Please check your connection and try again.",
    };
  }
}
