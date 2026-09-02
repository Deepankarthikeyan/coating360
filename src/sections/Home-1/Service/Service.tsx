import siteContent from "../../../data/siteContent";

const Service = () => {
  const { services, brand } = siteContent;

  return (
    <div className="service-area-1 space-top overflow-hidden" id="service-sec">
      <div className="container">
        <div className="row gy-30 gx-30">
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

          {services.map((service) => (
            <div className="col-xl-4 col-md-6" key={service.id}>
              <div className="service-card">
                <div className="service-card-shadow-text">SERVICES - {service.id}</div>
                <div className="service-card_content">
                  <div className="service-card_icon service-card_icon--remix">
                    <i className={service.icon} aria-hidden="true" />
                  </div>
                  <h4 className="service-card_title">{service.title}</h4>
                  <p className="service-card_text">{service.text}</p>
                  <div className="btn-wrap">
                    <div className="icon-btn">
                      <i className="ri-arrow-right-up-line" />
                    </div>
                    <a href="#contact-sec" className="btn">
                      Explore Service <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
