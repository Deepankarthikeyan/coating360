import { Link } from "react-router-dom";
import siteContent, { navItems } from "../../../data/siteContent";

type SubPageMobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

const SubPageMobileMenu = ({ isMenuOpen, setIsMenuOpen }: SubPageMobileMenuProps) => {
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`mobile-menu-wrapper ${isMenuOpen ? "body-visible" : ""}`}>
      <div className="mobile-menu-area">
        <div className="mobile-logo site-brand-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={siteContent.brand.logo} alt={siteContent.brand.name} />
          </Link>
          <button onClick={closeMenu} className="menu-toggle" aria-label="Close menu">
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link to={item.isRoute ? item.href : `/${item.href}`} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubPageMobileMenu;
