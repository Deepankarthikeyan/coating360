import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { ServiceDetail } from "../../../data/servicesDetailsData";

interface ServicePopupProps {
  service: ServiceDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceTagRow = ({ row }: { row: string }) => {
  const tags = row.split("|").map((tag) => tag.trim()).filter(Boolean);

  return (
    <div className="service-popup-tag-row">
      {tags.map((tag, index) => (
        <span className="service-popup-tag" key={`${tag}-${index}`}>
          {tag}
        </span>
      ))}
    </div>
  );
};

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

  const hasSections = service.sections.length > 0;

  return (
    <div className="service-popup-overlay" onClick={onClose} role="presentation">
      <div
        className={`service-popup-content${hasSections ? " service-popup-content--detailed" : ""}`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={service.title}
      >
        <button type="button" className="service-popup-close" onClick={onClose} aria-label="Close">
          <i className="ri-close-line"></i>
        </button>

        {hasSections ? (
          <div className="service-popup-scroll">
            <div className="service-popup-image-wrap">
              <img src={service.heroImage} alt={service.title} loading="lazy" />
            </div>
            <div className="service-popup-body">
              <h3 className="service-popup-title">{service.title}</h3>
              <p className="service-popup-intro">{service.intro}</p>

              {service.sections.map((section) => (
                <div className="service-popup-section" key={section.title}>
                  <h4 className="service-popup-section-title">{section.title}</h4>
                  <div className="service-popup-tags">
                    {section.items.map((item) => (
                      <ServiceTagRow row={item} key={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="service-popup-image-wrap">
            <img src={service.heroImage} alt={service.title} loading="lazy" />
          </div>
        )}

        <div className="service-popup-actions">
          <Link
            to={`/contact?service=${service.slug}#quote`}
            className="btn btn-sm service-popup-contact-btn"
            onClick={onClose}
          >
            Contact Us <i className="ri-arrow-right-up-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;
