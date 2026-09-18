import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { ServiceDetail } from "../../../data/servicesDetailsData";

interface ServicePopupProps {
  service: ServiceDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServicePopup = ({ service, isOpen, onClose }: ServicePopupProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !service) {
    return null;
  }

  return (
    <div className="service-popup-overlay" onClick={onClose} role="presentation">
      <div
        className="service-popup-content"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-popup-title"
      >
        <button type="button" className="service-popup-close" onClick={onClose} aria-label="Close">
          <i className="ri-close-line"></i>
        </button>
        <div className="service-popup-banner">
          <img src={service.heroImage} alt={service.title} loading="lazy" />
        </div>
        <div className="service-popup-body">
          <h2 className="service-popup-title" id="service-popup-title">{service.title}</h2>
          <p className="service-popup-text">{service.intro}</p>
          <div className="service-popup-image">
            <img src={service.secondaryImage} alt={service.shortTitle} loading="lazy" />
          </div>
          <Link
            to={`/contact?service=${service.slug}#quote`}
            className="btn service-popup-contact-btn"
            onClick={onClose}
          >
            Get Free Quote <i className="ri-arrow-right-up-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;
