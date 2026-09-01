import siteContent from "../../../data/siteContent";

const Service = () => {
  const { services, images, brand } = siteContent;

  return (
    <section className="coating-services-section space-top overflow-hidden" id="service-sec">
      <div className="container">
        <div className="title-area text-center mb-50">
          <span className="sub-title">
            <img src="/assets/img/icon/section-subtitle-icon.svg" alt="" />
            What We Do
          </span>
          <h2 className="sec-title">Our services that we provide</h2>
          <p className="sec-text mx-auto">{brand.description}</p>
        </div>

        <div className="coating-service-grid">
          {services.map((service, index) => (
            <article
              className={`coating-service-tile ${index % 2 === 1 ? "coating-service-tile--flip" : ""}`}
              key={service.id}
            >
              <div className="coating-service-tile__media">
                {"variant" in service && service.variant === "abrasives" ? (
                  <div className="coating-service-tile__abrasives">
                    {images.abrasiveSamples.map((sample) => (
                      <div className="coating-service-tile__abrasive-item" key={sample.label}>
                        <img src={sample.image} alt={sample.label} loading="lazy" />
                        <span>{sample.label}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <img
                    src={images.serviceCards[index]}
                    alt={service.title}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="coating-service-tile__stripe" aria-hidden="true" />
              <div className="coating-service-tile__content">
                <div className="coating-service-tile__icon">
                  <i className={service.icon} aria-hidden="true" />
                </div>
                <h3 className="coating-service-tile__title">{service.title}</h3>
                <p className="coating-service-tile__text">{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
