import siteContent, { navItems } from "../../../data/siteContent";

type OnePageMobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

const OnePageMobileMenu = ({ isMenuOpen, setIsMenuOpen }: OnePageMobileMenuProps) => {
  const closeMenu = () => setIsMenuOpen(false);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="mobile-menu-wrapper body-visible">
      <div className="mobile-menu-area">
        <div className="mobile-logo">
          <a href="#hero" onClick={closeMenu}>
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
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OnePageMobileMenu;
