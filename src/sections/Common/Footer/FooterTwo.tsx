import siteContent, { navItems } from "../../../data/siteContent";
import { handleAnchorClick } from "../../../utils/smoothScroll";
import type { MouseEvent } from "react";

const FooterTwo = () => {
    const { brand, contact } = siteContent;

    const onAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
        handleAnchorClick(event, href);
    };

    return (
        <div>
            <footer
                className="footer-wrapper footer-layout1 background-image"
                style={{ backgroundImage: "url('/assets/img/bg/footer-bg1-1.png')" }}
            >
                <div className="container">
                    <div className="footer-top-1">
                        <div className="footer-logo">
                            <a href="#hero" onClick={(event) => onAnchorClick(event, "#hero")}>
                                <img src={brand.logoWhite} alt={brand.name} />
                            </a>
                        </div>
                        <div className="subscribe-box">
                            <p className="subscribe-box_text">
                                {brand.tagline} — Products | Equipment | Application | Inspection | Complete Coating Solutions
                            </p>
                        </div>
                    </div>
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-3">
                                <div className="widget widget-about footer-widget">
                                    <h3 className="widget_title">About Company</h3>
                                    <p className="about-text">{brand.description}</p>
                                    <h4 className="about-year">{brand.shortName}</h4>
                                    <h5 className="about-subtitle">WE ARE AVAILABLE</h5>
                                    <p className="about-text">
                                        <span className="text-theme">{contact.hours.split(":")[0]}:</span>
                                        {contact.hours.split(":").slice(1).join(":")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Quick Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            {navItems.map((item) => (
                                                <li key={item.href}>
                                                    <a href={item.href} onClick={(event) => onAnchorClick(event, item.href)}>
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget widget-contact">
                                    <h3 className="widget_title">Office Address</h3>
                                    <p className="contact-text">{contact.address.full}</p>
                                    <h3 className="widget_title">Email Address</h3>
                                    <p className="footer-text">
                                        <a href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>
                                    </p>
                                    <p className="footer-text">
                                        <a href={`mailto:${contact.serviceEmail}`}>{contact.serviceEmail}</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Phone Number</h3>
                                    {contact.phones.map((phone) => (
                                        <p className="footer-text" key={phone}>
                                            <a href={`tel:${phone}`}>{phone}</a>
                                        </p>
                                    ))}
                                    <h3 className="widget_title">Follow Us</h3>
                                    <div className="social-btn style2">
                                        <a href="https://www.twitter.com/" aria-label="Twitter"><i className="ri-twitter-x-line"></i></a>
                                        <a href="https://instagram.com/" aria-label="Instagram"><i className="ri-instagram-line"></i></a>
                                        <a href="https://facebook.com/" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
                                        <a href="https://linkedin.com/" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-wrap">
                        <div className="row gy-3 justify-content-md-between justify-content-center">
                            <div className="col-auto align-self-center">
                                <p className="copyright-text text-center">
                                    © {new Date().getFullYear()}{" "}
                                    <a href="#hero" onClick={(event) => onAnchorClick(event, "#hero")}>
                                        {brand.name}
                                    </a>{" "}
                                    | All rights reserved
                                </p>
                            </div>
                            <div className="col-auto">
                                <div className="footer-links">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={(event) => onAnchorClick(event, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterTwo;
