import siteContent from "../../../data/siteContent";

const Service = () => {
  const { services, images, brand } = siteContent;

  return (
    <section className="coating-services-flyer space-top overflow-hidden" id="service-sec">
      <div className="container">
        <div className="title-area text-center mb-50">
          <span className="sub-title">
            <img src="/assets/img/icon/section-subtitle-icon.svg" alt="" />
            What We Do
          </span>
          <h2 className="sec-title">Our services that we provide</h2>
          <p className="sec-text mx-auto">{brand.description}</p>
        </div>

        <div className="coating-flyer-grid">
          {services.map((service, index) => (
            <article
              className={`coating-flyer-tile${service.variant === "abrasives" ? " coating-flyer-tile--abrasives" : ""}`}
              key={service.id}
            >
              <div className="coating-flyer-tile__body">
                <div className="coating-flyer-tile__icon">
                  <i className={service.icon} aria-hidden="true" />
                </div>
                <h3 className="coating-flyer-tile__title">{service.title}</h3>
                <p className="coating-flyer-tile__text">{service.text}</p>
              </div>
              <div className="coating-flyer-tile__divider" aria-hidden="true" />
              {service.variant === "abrasives" ? (
                <div className="coating-flyer-tile__abrasives">
                  {images.abrasiveSamples.map((sample) => (
                    <figure className="coating-flyer-abrasive" key={sample.label}>
                      <img src={sample.image} alt={sample.label} loading="lazy" />
                      <figcaption>{sample.label}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="coating-flyer-tile__photo">
                  <img src={images.serviceCards[index]} alt={service.title} loading="lazy" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
