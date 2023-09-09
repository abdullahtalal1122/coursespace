import HomeNavMenu from "./homeNavMenu";
import HomeNavButtons from "./homeNavButtons";
import HomeNavLogo from "./homeNavLogo";
import styles from "./layout.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.container}>
        <HomeNavLogo />
        <HomeNavMenu />
        <HomeNavButtons />
      </nav>
    </div>
  );
};

export default Navbar;
