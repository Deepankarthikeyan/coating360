import siteContent from "../../../data/siteContent";

const Service = () => {
  const { services, images, brand } = siteContent;

  return (
    <div
      className="service-area-1 space-top overflow-hidden"
      style={{ backgroundImage: "url('/assets/img/bg/service-bg1-1.png')" }}
      id="service-sec"
    >
      <div className="container">
        <div className="row gy-30 gx-30">
          <div className="col-xl-4 col-lg-5">
            <div className="title-area mb-0 text-left content-text-extra-style">
              <span className="sub-title">
                <img src="/assets/img/icon/section-subtitle-icon.svg" alt="" />
                What We Do
              </span>
              <h2 className="sec-title">Our services that we provide</h2>
              <p>{brand.description}</p>
            </div>
          </div>

          <div className="col-12">
            <div className="coating-service-grid coating-service-grid--full">
              {services.map((service, index) => (
                <article className="coating-service-tile" key={service.id}>
                  <div className="coating-service-tile__content">
                    <div className="coating-service-tile__icon">
                      <i className={service.icon} aria-hidden="true" />
                    </div>
                    <h3 className="coating-service-tile__title">{service.title}</h3>
                    <p className="coating-service-tile__text">{service.text}</p>
                    <div className="coating-service-tile__btn">
                      <a href="#contact-sec" className="btn btn-sm">
                        Explore Service <i className="ri-arrow-right-up-line"></i>
                      </a>
                    </div>
                  </div>
                  <div className="coating-service-tile__stripe" aria-hidden="true" />
                  <div className="coating-service-tile__media">
                    {"variant" in service && service.variant === "abrasives" ? (
                      <img
                        src={images.serviceCards[index]}
                        alt={service.title}
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={images.serviceCards[index]}
                        alt={service.title}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="coating-service-tile__number">SERVICES - {service.id}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
