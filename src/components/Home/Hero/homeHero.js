import styles from "../homelayout.module.css";
import HeroUpper from "./homeHeroUpper";
import HeroBottom from "./homeHeroBottom";

const HomeHero = () => {
  return (
    <div className={styles.heroContainer}>
      <HeroUpper />
      <HeroBottom />
    </div>
  );
};

export default HomeHero;
