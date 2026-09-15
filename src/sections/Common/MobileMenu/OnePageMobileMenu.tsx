import type { MouseEvent } from "react";
import siteContent, { navItems } from "../../../data/siteContent";
import { handleAnchorClick } from "../../../utils/smoothScroll";

type OnePageMobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

const OnePageMobileMenu = ({ isMenuOpen, setIsMenuOpen }: OnePageMobileMenuProps) => {
  const closeMenu = () => setIsMenuOpen(false);

  const onNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    handleAnchorClick(event, href, closeMenu);
  };

  return (
    <div className={`mobile-menu-wrapper ${isMenuOpen ? "body-visible" : ""}`}>
      <div className="mobile-menu-area">
        <div className="mobile-logo">
          <a href="#hero" onClick={(event) => onNavClick(event, "#hero")}>
            <img src={siteContent.brand.logo} alt={siteContent.brand.name} />
          </a>
          <button onClick={closeMenu} className="menu-toggle" aria-label="Close menu">
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(event) => onNavClick(event, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OnePageMobileMenu;
