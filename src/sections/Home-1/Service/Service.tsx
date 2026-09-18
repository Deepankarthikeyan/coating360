import { useState } from "react";
import siteContent from "../../../data/siteContent";
import { getServiceBySlug } from "../../../data/servicesDetailsData";
import ServicePopup from "./ServicePopup";

const Service = () => {
  const { services, brand } = siteContent;
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeService = activeSlug ? (getServiceBySlug(activeSlug) ?? null) : null;

  const openService = (slug: string) => setActiveSlug(slug);
  const closeService = () => setActiveSlug(null);

  return (
    <>
      <div className="service-area-1 space-top overflow-hidden" id="service-sec">
        <div className="container">
          <div className="row gy-20 gx-20">
            <div className="col-xl-4 col-md-6">
              <div className="title-area mb-0 text-left content-text-extra-style">
                <span className="sub-title">
                  <img src="/assets/img/icon/section-subtitle-icon.svg" alt="" />
                  What We Do
                </span>
                <h2 className="sec-title">Our services that we provide</h2>
                <p>{brand.description}</p>
              </div>
            </div>

            {services.map((service) => {
              const serviceDetail = getServiceBySlug(service.slug);
              const cardImage = serviceDetail?.heroImage ?? service.iconImage;

              return (
                <div className="col-xl-4 col-md-6" key={service.id}>
                  <div className="service-card service-card--image-top">
                    <div className="service-card-thumb">
                      <img src={cardImage} alt={service.title} loading="lazy" />
                    </div>
                    <div className="service-card_content">
                      <h4 className="service-card_title">
                        <button type="button" className="service-card-link" onClick={() => openService(service.slug)}>
                          {service.title}
                        </button>
                      </h4>
                      <p className="service-card_text">{service.text}</p>
                      <div className="btn-wrap">
                        <div className="icon-btn">
                          <i className="ri-arrow-right-up-line" />
                        </div>
                        <button type="button" className="btn" onClick={() => openService(service.slug)}>
                          Explore Service <i className="ri-arrow-right-up-line" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ServicePopup service={activeService} isOpen={Boolean(activeService)} onClose={closeService} />
    </>
  );
};

export default Service;
