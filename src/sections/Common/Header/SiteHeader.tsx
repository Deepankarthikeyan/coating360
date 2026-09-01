import { useEffect, useState } from "react";
import siteContent, { navItems } from "../../../data/siteContent";
import OnePageMobileMenu from "../MobileMenu/OnePageMobileMenu";

const SiteHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { brand, contact } = siteContent;

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("disable-scroll", isMenuOpen);
    return () => document.body.classList.remove("disable-scroll");
  }, [isMenuOpen]);

  return (
    <div className="header-decoration">
      <OnePageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <header className="nav-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-top-left">
                  <div className="header-links">
                    <ul>
                      <li>
                        <div className="social-links">
                          <a href="https://www.facebook.com/" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
                          <a href="https://www.twitter.com/" aria-label="Twitter"><i className="ri-twitter-x-fill"></i></a>
                          <a href="https://www.instagram.com/" aria-label="Instagram"><i className="ri-instagram-line"></i></a>
                          <a href="https://www.linkedin.com/" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-top-right">
                  <div className="header-links ps-0">
                    <ul>
                      <li><i className="ri-time-line"></i> {contact.hours}</li>
                      <li><i className="ri-map-pin-line"></i> {contact.address.city}, Tamil Nadu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          <div className="menu-area">
            <div className="header-navbar-logo">
              <a href="#hero"><img src={brand.logo} alt={brand.name} /></a>
            </div>
            <div className="logo-bg"></div>
            <div className="container">
              <div className="row align-items-center justify-content-lg-start justify-content-between">
                <div className="col-auto d-xxl-none d-block">
                  <div className="header-logo">
                    <a href="#hero"><img src={brand.logo} alt={brand.name} /></a>
                  </div>
                </div>
                <div className="col-auto menu-bar ms-xxl-0">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <a href={item.href}>{item.label}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      onClick={() => setIsMenuOpen(true)}
                      type="button"
                      className="menu-toggle icon-btn"
                      aria-label="Open menu"
                    >
                      <i className="ri-menu-line"></i>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-xl-block d-none space-left">
                  <div className="header-button">
                    <a href="#contact-sec" className="btn header-one-extra-style">
                      GET IN TOUCH <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="navbar-right-desc d-xxl-flex d-none"
              style={{ backgroundImage: "url('/assets/img/bg/header-1-bg.png')" }}
            >
              <div className="icon-btn">
                <i className="ri-phone-fill"></i>
              </div>
              <div className="navbar-right-desc-details">
                <h6 className="title">Call us any time</h6>
                <a className="link" href={`tel:${contact.phones[0]}`}>{contact.phones[0]}</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SiteHeader;
