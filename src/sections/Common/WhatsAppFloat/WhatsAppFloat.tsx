import { siteContent } from "../../../data/siteContent";
import { formatPhoneDisplay, formatPhoneTel } from "../../../utils/contactFormat";

const WhatsAppFloat = () => {
  const phone = siteContent.contact.phones[0];
  const whatsappUrl = `https://wa.me/${formatPhoneTel(phone).replace("+", "")}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp at ${formatPhoneDisplay(phone)}`}
    >
      <i className="ri-whatsapp-fill" aria-hidden="true"></i>
    </a>
  );
};

export default WhatsAppFloat;
