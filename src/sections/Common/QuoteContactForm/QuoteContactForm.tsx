import { useEffect, useRef } from "react";
import siteContent from "../../../data/siteContent";
import servicesDetails, { getServiceBySlug } from "../../../data/servicesDetailsData";

interface QuoteContactFormProps {
  serviceSlug?: string;
}

const QuoteContactForm = ({ serviceSlug }: QuoteContactFormProps) => {
  const { cta, images } = siteContent;
  const formRef = useRef<HTMLDivElement>(null);
  const selectedService = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const imageSrc = selectedService?.heroImage ?? images.contact;
  const imageAlt = selectedService?.title ?? "AGH Coating360 Services";

  useEffect(() => {
    if (serviceSlug && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [serviceSlug]);

  return (
    <section className="premium-split-section" id="quote" ref={formRef}>
      <div className="premium-split-layout">
        <div className="premium-split-media">
          <div className="premium-split-media-frame">
            <img src={imageSrc} alt={imageAlt} loading="lazy" className="premium-split-image" />
          </div>
        </div>

        <div className="premium-split-form">
          <div className="premium-split-form-inner">
            <span className="premium-split-eyebrow">Get Free Quote</span>
            <h2 className="premium-split-title">
              Interested in {selectedService?.title ?? "our services"}?
            </h2>
            <p className="premium-split-description">{cta.text}</p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="premium-enquiry-form service-contact-form"
            >
              <div className="premium-form-grid">
                <div className="premium-form-field">
                  <label className="premium-form-label" htmlFor="quote-name">Your Name</label>
                  <input
                    id="quote-name"
                    type="text"
                    className="premium-form-input"
                    name="name"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="premium-form-field">
                  <label className="premium-form-label" htmlFor="quote-email">Email Address</label>
                  <input
                    id="quote-email"
                    type="email"
                    className="premium-form-input"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="premium-form-field">
                  <label className="premium-form-label" htmlFor="quote-phone">Phone Number</label>
                  <input
                    id="quote-phone"
                    type="tel"
                    className="premium-form-input"
                    name="number"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="premium-form-field premium-form-field-full">
                  <label className="premium-form-label" htmlFor="quote-service">Service</label>
                  <select
                    id="quote-service"
                    name="subject"
                    className="premium-form-input premium-form-select"
                    defaultValue={selectedService?.title ?? ""}
                  >
                    <option value="">Select a service</option>
                    {servicesDetails.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.shortTitle}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="premium-form-field premium-form-field-full">
                  <label className="premium-form-label" htmlFor="quote-message">Your Enquiry</label>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows={4}
                    className="premium-form-input premium-form-textarea"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <div className="premium-form-field premium-form-field-full">
                  <button type="submit" className="premium-form-submit">
                    Submit Enquiry
                    <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <p className="premium-form-message" role="status"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteContactForm;
