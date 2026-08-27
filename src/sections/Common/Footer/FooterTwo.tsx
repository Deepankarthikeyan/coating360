import { Link } from "react-router-dom";
import siteContent from "../../../data/siteContent";

 
const FooterTwo = () => {
    const { brand, contact } = siteContent;

    return (
        <div>
            <footer
                className="footer-wrapper footer-layout1 background-image"
                style={{ backgroundImage: "url('/assets/img/bg/footer-bg1-1.png')" }}
            >
                <div className="container">
                    <div className="footer-top-1">
                        <div className="footer-logo">
                            <Link to="/">
                                <img src={brand.logoWhite} alt={brand.name} />
                            </Link>
                        </div>
                        <div className="subscribe-box">
                            <p className="subscribe-box_text">
                                {brand.tagline} — Products | Equipment | Application | Inspection | Complete Coating Solutions
                            </p>
                            <form className="newsletter-form">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Enter your email..."
                                    required
                                />
                                <button type="submit" className="btn style2">
                                    SUBSCRIBE<i className="ri-arrow-right-up-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-3">
                                <div className="widget widget-about footer-widget">
                                    <h3 className="widget_title">About Company</h3>
                                    <p className="about-text">
                                        {brand.description}
                                    </p>
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
                                    <h3 className="widget_title">Useful Links</h3>
                                    <div className="menu-all-pages-container grid-style">
                                        <ul className="menu">
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">Our Services</Link>
                                            </li>
                                            <li>
                                                <Link to="/project">Projects</Link>
                                            </li>
                                            <li>
                                                <Link to="/blog">News & Articles</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                        <ul className="menu">
                                            <li>
                                                <Link to="/service">Industrial Paints</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">Marine Coatings</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">Fireproof Coatings</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">Blasting & Abrasives</Link>
                                            </li>
                                            <li>
                                                <Link to="/service">Coating Inspection</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget widget-contact">
                                    <h3 className="widget_title">Office Address</h3>
                                    <p className="contact-text">
                                        {contact.address.full}
                                    </p>
                                    <h3 className="widget_title">Email Address</h3>
                                    <p className="text-white footer-text">Get in Touch!</p>
                                    <p className="footer-text">
                                        <Link to={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</Link>
                                    </p>
                                    <p className="footer-text">
                                        <Link to={`mailto:${contact.serviceEmail}`}>{contact.serviceEmail}</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Phone Number</h3>
                                    {contact.phones.map((phone) => (
                                        <p className="footer-text" key={phone}>
                                            <Link to={`tel:${phone}`}>{phone}</Link>
                                        </p>
                                    ))}
                                    <h3 className="widget_title">Follow Us</h3>
                                    <div className="social-btn style2">
                                        <Link to="https://www.twitter.com/">
                                            <i className="ri-twitter-x-line"></i>
                                        </Link>
                                        <Link to="https://instagram.com/">
                                            <i className="ri-instagram-line"></i>
                                        </Link>
                                        <Link to="https://facebook.com/">
                                            <i className="ri-facebook-fill"></i>
                                        </Link>
                                        <Link to="https://linkedin.com/">
                                            <i className="ri-linkedin-fill"></i>
                                        </Link>
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
                                    © {new Date().getFullYear()} <Link to="/">{brand.name}</Link> | All rights reserved
                                </p>
                            </div>
                            <div className="col-auto">
                                <div className="footer-links">
                                    <Link to="/contact">Terms & Condition</Link>
                                    <Link to="/contact">Privacy Policy</Link>
                                    <Link to="/contact">Contact Us</Link>
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
