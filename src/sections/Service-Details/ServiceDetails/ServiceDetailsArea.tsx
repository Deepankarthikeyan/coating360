import { Link } from "react-router-dom";
import type { ServiceDetail, ServiceSection } from "../../../data/servicesDetailsData";

interface ServiceDetailsAreaProps {
  service: ServiceDetail;
}

const SectionList = ({ section }: { section: ServiceSection }) => {
  if (section.items.length <= 6) {
    return (
      <div className="process-grid-list style2 service-details-top-extra-space">
        <div className="process-grid-list-bg-text">SERVICE</div>
        {section.items.map((item, index) => (
          <div className="process-grid" key={item}>
            <div className="process-grid-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="process-grid-details">
              <h3 className="process-grid-title">{item}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="checklist style6">
      <ul>
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ServiceDetailsArea = ({ service }: ServiceDetailsAreaProps) => {
  const [featuredSection, ...remainingSections] = service.sections;
  const solutionsSection = remainingSections[0];
  const extraSections = remainingSections.slice(1);

  return (
    <div className="service-details-area space-top overflow-hidden">
      <div className="container3">
        <div className="row gy-30 gx-30">
          <div className="col-12">
            <div className="single-page">
              <div className="service-thumb mb-50">
                <img className="w-100" src={service.heroImage} alt={service.title} loading="lazy" />
              </div>
              <h2 className="sec-title2 mb-25">{service.title}</h2>
              <p className="mb-50">{service.intro}</p>

              <div className="row gy-4 justify-content-center">
                {service.highlights.map((highlight) => (
                  <div className="col-xl-4 col-lg-6" key={highlight.title}>
                    <div className="service-card style4">
                      <div className="service-card_icon">
                        <img src={service.iconImage} alt={highlight.title} loading="lazy" />
                      </div>
                      <div className="service-card_content item-decoration">
                        <h4 className="service-card_title">{highlight.title}</h4>
                        <p className="service-card_text">{highlight.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {featuredSection && (
                <div className="mt-60 mb-60 service-details-absolute-container">
                  <div className="row justify-content-between align-items-center gy-40">
                    <div className="col-lg-6">
                      <div className="title-area text-md-start text-center">
                        <h2 className="sec-title2">{featuredSection.title}</h2>
                      </div>
                      <div className="process-thumb2-1">
                        <img src={service.secondaryImage} alt={service.shortTitle} loading="lazy" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <SectionList section={featuredSection} />
                    </div>
                  </div>
                </div>
              )}

              {solutionsSection && (
                <div className="row align-items-end gy-40 justify-content-between">
                  <div className="col-xl-6">
                    <h2 className="fw-semibold service-text-adjustment">{solutionsSection.title}</h2>
                    <div className="mb-35">
                      <SectionList section={solutionsSection} />
                    </div>
                    {extraSections.length === 0 && service.closingText && <p>{service.closingText}</p>}
                  </div>
                  <div className="col-xxl-5 col-xl-6">
                    <div className="video-wrap service-details-top-extra-space">
                      <img className="w-100" src={service.heroImage} alt={service.title} loading="lazy" />
                    </div>
                  </div>
                </div>
              )}

              {extraSections.map((section) => (
                <div className="mt-60" key={section.title}>
                  <h2 className="sec-title2 mb-25">{section.title}</h2>
                  <SectionList section={section} />
                </div>
              ))}

              {service.closingText && (solutionsSection || extraSections.length > 0) && (
                <div className="mt-50">
                  <p>{service.closingText}</p>
                </div>
              )}

              {!solutionsSection && !featuredSection && service.closingText && (
                <div className="mt-50">
                  <p>{service.closingText}</p>
                </div>
              )}

              <div className="mt-60">
                <div className="title-area text-center">
                  <h2 className="sec-title2">Other Services</h2>
                </div>
                <div className="row gy-4 justify-content-center">
                  <div className="col-auto">
                    <Link to="/#service-sec" className="btn">
                      View All Services <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsArea;
