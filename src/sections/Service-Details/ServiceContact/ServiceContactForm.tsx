import siteContent from "../../../data/siteContent";
import servicesDetails from "../../../data/servicesDetailsData";

interface ServiceContactFormProps {
  serviceTitle?: string;
}

const ServiceContactForm = ({ serviceTitle }: ServiceContactFormProps) => {
  const { cta } = siteContent;

  return (
    <section className="contact-area-2 space-bottom overflow-hidden" id="service-contact">
      <div className="container">
        <div
          className="contact-wrap2 space overflow-hidden shape-mockup-wrap background-image"
          style={{ backgroundImage: "url('/assets/img/bg/contact-bg3-1.png')" }}
        >
          <div
            className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
            style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')", top: "0px", left: "0px" }}
          ></div>
          <div className="row gy-60 justify-content-lg-end justify-content-center">
            <div className="col-xl-7">
              <div className="contact-form-wrap">
                <div className="title-area">
                  <span className="sub-title text-theme">
                    Get Free Quote <i className="ri-arrow-right-down-line"></i>
                  </span>
                  <h2 className="sec-title">Interested in {serviceTitle ?? "our services"}?</h2>
                  <p>{cta.text}</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="contact-form ajax-contact">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="tel" className="form-control" name="number" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group custom-form-design">
                        <select name="subject" className="single-select nice-select form-select" defaultValue={serviceTitle ?? ""}>
                          <option value="">Select Service</option>
                          {servicesDetails.map((service) => (
                            <option key={service.slug} value={service.title}>
                              {service.shortTitle}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          cols={30}
                          rows={3}
                          className="form-control"
                          placeholder="Tell us about your project requirements..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-btn col-12">
                      <button type="submit" className="btn w-100">
                        Submit Now <i className="ri-arrow-right-up-line"></i>
                      </button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContactForm;
