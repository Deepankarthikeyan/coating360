import siteContent from "../../../data/siteContent";

const Contact = () => {
  const { contact, brand, cta, images } = siteContent;

  return (
    <section
      className="contact-area-1 space bg-title overflow-hidden shape-mockup-wrap background-image"
      id="contact-sec"
      style={{ backgroundImage: "url('/assets/img/bg/contact-bg1-1.png')" }}
    >
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite style-gray background-image"
        style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')", top: '0px' }}
      ></div>
      <div className="container">
        <div className="row gy-60 flex-row-reverse justify-content-lg-between justify-content-center align-items-center">
          <div className="col-xl-5">
            <div className="contact-thumb1-1">
              <img src={images.contact} alt={brand.name} loading="lazy" />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="title-area">
              <span className="sub-title">
                <img src="/assets/img/icon/section-subtitle-icon.svg" alt="" />
                <span className="text-white">Contact Us</span>
              </span>
              <h2 className="sec-title text-white">{cta.title.toUpperCase()}</h2>
              <p className="text-white">{cta.text}</p>
            </div>
            <div className="row gy-60">
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <img src="/assets/img/icon/contact-icon1-1.svg" alt="" />
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Head Office</h4>
                    <p className="contact-grid-text">{contact.address.full}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <img src="/assets/img/icon/contact-icon1-2.svg" alt="" />
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Phone Number</h4>
                    {contact.phones.map((phone) => (
                      <p className="contact-grid-text" key={phone}>
                        <a href={`tel:${phone}`}>{phone}</a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <img src="/assets/img/icon/contact-icon1-3.svg" alt="" />
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Email Address</h4>
                    <p className="contact-grid-text">
                      <a href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>
                    </p>
                    <p className="contact-grid-text">
                      <a href={`mailto:${contact.serviceEmail}`}>{contact.serviceEmail}</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <img src="/assets/img/icon/contact-icon1-4.svg" alt="" />
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Business Hours</h4>
                    <p className="contact-grid-text">{contact.hours}</p>
                    <p className="contact-grid-text">{brand.website}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
