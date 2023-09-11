import NavMenu from "./NavMenu";
import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";
import styles from "./nav.module.css";
import HamburgerIcon from "./NavHamburger";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hamburgerIcon, setHamBurgerIcon] = useState(true);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setHamBurgerIcon(!hamburgerIcon);
  };

  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <NavLogo />
        </div>
        {hamburgerIcon ? (
          <HamburgerIcon isOpen={isNavOpen} onClick={toggleNav} />
        ) : null}

        {isNavOpen ? null : (
          <div className={styles.responsiveNavMenu}>
            <NavMenu />
          </div>
        )}

        {isNavOpen && (
          <div>
            <div className={styles.navMenu}>
              <span onClick={toggleNav} className={styles.close}>
                X
              </span>
              <NavMenu />
              <NavButtons />
            </div>
          </div>
        )}

        {isNavOpen ? null : (
          <div className={styles.navButtons}>
            <NavButtons />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
