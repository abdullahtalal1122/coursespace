import HomeCourcesSlider from "./homeCourcesSlider";
import styles from "../layout.module.css";

const HomeCources = () => {
  return (
    <div className={styles.courceContainer}>
      <div>
        <h1>Most Popular Courses</h1>
      </div>
      <div>
        <HomeCourcesSlider />
      </div>
    </div>
  );
};

export default HomeCources;
