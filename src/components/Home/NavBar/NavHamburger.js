import styles from "../layout.module.css";

const HamburgerIcon = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default HamburgerIcon;
