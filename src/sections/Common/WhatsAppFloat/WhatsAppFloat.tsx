import { siteContent } from "../../../data/siteContent";

const WhatsAppFloat = () => {
  const phone = siteContent.contact.phones[0];
  const phoneDigits = phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${phoneDigits}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp at ${phone}`}
    >
      <i className="ri-whatsapp-fill" aria-hidden="true"></i>
    </a>
  );
};

export default WhatsAppFloat;
