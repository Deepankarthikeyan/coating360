import { Link } from "react-router-dom";
import siteContent from "../../../data/siteContent";

const serviceIcons = [
    "/assets/img/icon/service-icon1-1.png",
    "/assets/img/icon/service-icon1-2.png",
    "/assets/img/icon/service-icon1-3.png",
    "/assets/img/icon/service-icon1-4.png",
    "/assets/img/icon/service-icon1-5.png",
    "/assets/img/icon/service-icon1-1.png",
    "/assets/img/icon/service-icon1-2.png",
    "/assets/img/icon/service-icon1-3.png",
];

const ServiceArea = () => {
    return (
        <div className="service-area-4 space-top overflow-hidden">
            <div className="container">
                <div className="row gy-30 gx-30">
                    <div className="col-xl-4 col-md-6">
                        <div className="title-area mb-0 text-left content-text-extra-style">
                            <span className="sub-title"><img src="/assets/img/icon/section-subtitle-icon.svg" alt="" /> Our Products & Services</span>
                            <h2 className="sec-title">Complete coating solutions under one roof</h2>
                            <p>{siteContent.brand.description}</p>
                        </div>
                    </div>
                    {siteContent.services.map((service, index) => (
                        <div className="col-xl-4 col-md-6" key={service.id}>
                            <div className="service-card style3">
                                <div className="service-card-shadow-text">
                                    SERVICES - {service.id}
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src={serviceIcons[index]} alt="" loading="lazy" />
                                    </div>
                                    <h4 className="service-card_title"><Link to="/service-details">{service.title}</Link></h4>
                                    <p className="service-card_text">{service.text}</p>
                                    <div className="btn-wrap">
                                        <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                        <Link to="/service-details" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
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

export default ServiceArea;
