import { navItems } from "../../../data/siteContent";

type OnePageMobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

const OnePageMobileMenu = ({ isMenuOpen, setIsMenuOpen }: OnePageMobileMenuProps) => {
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`mobile-menu mean-container ${isMenuOpen ? "mean-clicked" : ""}`}>
      <div className="mean-bar">
        <a href="#hero" className="meanmenu-reveal meanclose" onClick={closeMenu}>
          <span></span>
          <span></span>
          <span></span>
        </a>
        <nav className="mean-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`mobile-menu-wrapper ${isMenuOpen ? "show" : ""}`}
        style={{
          display: isMenuOpen ? "block" : "none",
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(0,0,0,0.45)",
        }}
        onClick={closeMenu}
      >
        <div
          className="mobile-menu-area"
          style={{
            background: "#fff",
            width: "300px",
            height: "100%",
            padding: "24px",
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <button type="button" className="closeButton" onClick={closeMenu} aria-label="Close menu">
            <i className="ri-close-line"></i>
          </button>
          <nav className="mobile-menu-nav mt-30">
            <ul className="menu">
              {navItems.map((item) => (
                <li key={item.href} style={{ marginBottom: "12px" }}>
                  <a href={item.href} onClick={closeMenu} style={{ fontWeight: 600 }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default OnePageMobileMenu;
