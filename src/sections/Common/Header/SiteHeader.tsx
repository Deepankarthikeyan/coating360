import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import siteContent, { navItems } from "../../../data/siteContent";
import OnePageMobileMenu from "../MobileMenu/OnePageMobileMenu";
import { handleAnchorClick } from "../../../utils/smoothScroll";

const SiteHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { brand, contact, news } = siteContent;

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("disable-scroll", isMenuOpen || isSideBarOpen);
    return () => document.body.classList.remove("disable-scroll");
  }, [isMenuOpen, isSideBarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSideBarOpen(false);
      }
    };

    if (isSideBarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSideBarOpen]);

  const onAnchorClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string,
    onAfterClick?: () => void,
  ) => {
    handleAnchorClick(event, href, onAfterClick);
  };

  return (
    <div className="header-decoration">
      <div className={`popup-search-box ${isPopupOpen ? "show" : ""}`}>
        <button onClick={() => setIsPopupOpen(false)} className="searchClose" type="button" aria-label="Close search">
          <i className="ri-close-line"></i>
        </button>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search Here.." />
          <button type="submit"><i className="ri-search-line"></i></button>
        </form>
      </div>

      <div className={`sidemenu-wrapper ${isSideBarOpen ? "show" : ""}`}>
        <div ref={sidebarRef} className="sidemenu-content">
          <button onClick={() => setIsSideBarOpen(false)} className="closeButton sideMenuCls" type="button" aria-label="Close sidebar">
            <i className="ri-close-line"></i>
          </button>
          <div className="widget widget-about footer-widget">
            <div className="footer-logo footer-img">
              <a href="#hero" onClick={(event) => onAnchorClick(event, "#hero", () => setIsSideBarOpen(false))}>
                <img src={brand.logo} alt={brand.name} />
              </a>
            </div>
            <p className="about-text mb-4">{brand.description}</p>
            <p className="footer-text">
              <a href={`tel:${contact.phones[0]}`}>
                <i className="ri-phone-line space-right-sidebar-icon"></i>
                {contact.phones[0]}
              </a>
            </p>
            <p className="contact-text">
              <i className="ri-map-pin-line space-right-sidebar-icon"></i>
              {contact.address.full}
            </p>
            <p className="footer-text">
              <a href={`mailto:${contact.salesEmail}`}>
                <i className="ri-mail-line space-right-sidebar-icon"></i>
                {contact.salesEmail}
              </a>
            </p>
            <div className="social-btn style3 mt-30">
              <a href="https://www.facebook.com/" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
              <a href="https://www.twitter.com/" aria-label="Twitter"><i className="ri-twitter-x-line"></i></a>
              <a href="https://www.instagram.com/" aria-label="Instagram"><i className="ri-instagram-line"></i></a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
            </div>
            <div className="recent-post-wrap mt-40">
              {news.map((item) => (
                <div className="recent-post" key={item.title}>
                  <div className="media-body">
                    <h4 className="post-title">
                      <a
                        className="text-inherit"
                        href="#blog-sec"
                        onClick={(event) => onAnchorClick(event, "#blog-sec", () => setIsSideBarOpen(false))}
                      >
                        {item.title}
                      </a>
                    </h4>
                    <div className="recent-post-meta">
                      <a href="#blog-sec" onClick={(event) => onAnchorClick(event, "#blog-sec", () => setIsSideBarOpen(false))}>
                        {item.category}
                      </a>
                      <a href="#blog-sec" onClick={(event) => onAnchorClick(event, "#blog-sec", () => setIsSideBarOpen(false))}>
                        {item.date}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
              <a href="#hero" onClick={(event) => onAnchorClick(event, "#hero")}>
                <img src={brand.logo} alt={brand.name} />
              </a>
            </div>
            <div className="logo-bg"></div>
            <div className="container">
              <div className="row align-items-center justify-content-lg-start justify-content-between">
                <div className="col-auto d-xxl-none d-block">
                  <div className="header-logo">
                    <a href="#hero" onClick={(event) => onAnchorClick(event, "#hero")}>
                      <img src={brand.logo} alt={brand.name} />
                    </a>
                  </div>
                </div>
                <div className="col-auto menu-bar ms-xxl-0">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} onClick={(event) => onAnchorClick(event, item.href)}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button onClick={() => setIsMenuOpen(true)} type="button" className="menu-toggle icon-btn" aria-label="Open menu">
                      <i className="ri-menu-line"></i>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-xl-block d-none space-left">
                  <div className="header-button">
                    <a href="#contact-sec" className="btn" onClick={(event) => onAnchorClick(event, "#contact-sec")}>
                      GET IN TOUCH <i className="ri-arrow-right-up-line"></i>
                    </a>
                    <button onClick={() => setIsPopupOpen(true)} type="button" className="search-btn searchBoxToggler simple-icon" aria-label="Open search">
                      <i className="ri-search-line"></i>
                    </button>
                    <button onClick={() => setIsSideBarOpen(true)} type="button" className="sidebar-btn sideMenuToggler simple-icon" aria-label="Open sidebar">
                      <i className="ri-grid-fill"></i>
                    </button>
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
