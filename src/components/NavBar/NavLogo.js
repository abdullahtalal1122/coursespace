import styles from "./nav.module.css";
const NavLogo = () => {
  return (
    <div className={styles.logo}>
      Course<span style={{ color: "#127C71" }}>space</span>
    </div>
  );
};

export default NavLogo;
