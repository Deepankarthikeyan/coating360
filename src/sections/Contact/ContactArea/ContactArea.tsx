import { Link } from "react-router-dom";
import siteContent from "../../../data/siteContent";

 

const ContactArea = () => {
  const { contact, brand } = siteContent;

  return (
    <section className="contact-page-area space">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">Sales Enquiry</h4>
                <div className="contact-page-card-text">
                  <i className="ri-phone-line"></i>
                  <Link
                    className="contact-page-card_link"
                    to={`tel:${contact.phones[0]}`}
                  >
                    {contact.phones[0]}
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-mail-line"></i>
                  <Link
                    className="contact-page-card_link"
                    to={`mailto:${contact.salesEmail}`}
                  >
                    {contact.salesEmail}
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-time-line"></i>{contact.hours}
                </div>
              </div>
              <div className="contact-page-card-thumb">
                <img src="/assets/img/normal/contact_page1-1.png" alt={brand.name} loading="lazy" />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">Service Support</h4>
                <div className="contact-page-card-text">
                  <i className="ri-phone-line"></i>
                  <Link
                    className="contact-page-card_link"
                    to={`tel:${contact.phones[1]}`}
                  >
                    {contact.phones[1]}
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-mail-line"></i>
                  <Link
                    className="contact-page-card_link"
                    to={`mailto:${contact.serviceEmail}`}
                  >
                    {contact.serviceEmail}
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-time-line"></i>{contact.hours}
                </div>
              </div>
              <div className="contact-page-card-thumb">
                <img src="/assets/img/normal/contact_page1-2.png" alt={brand.name} loading="lazy" />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">Head Office</h4>
                <div className="contact-page-card-text">
                  <i className="ri-map-pin-line"></i>
                  {contact.address.line1}, {contact.address.line2}
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-map-pin-line"></i>
                  {contact.address.line3}, {contact.address.city}
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-global-line"></i>
                  {brand.website}
                </div>
              </div>
              <div className="contact-page-card-thumb">
                <img src="/assets/img/normal/contact_page1-3.png" alt={brand.name} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
