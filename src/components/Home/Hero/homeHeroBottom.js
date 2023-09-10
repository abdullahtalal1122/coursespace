import styles from "../layout.module.css";
import Ptag from "../../Utils/Ptag";

const HeroBottom = () => {
  return (
    <div className={styles.heroBottomContainer}>
      <div>
        <h1>10K+</h1>
        <Ptag value="Students" padding="5px 90px" fontWeight="600" />
      </div>
      <div>
        <h1>20+</h1>
        <Ptag value="Quality Cources" padding="5px 90px" fontWeight="600" />
      </div>
      <div>
        <h1>5K+</h1>
        <Ptag value="Experience Mentors" padding="5px 90px" fontWeight="600" />
      </div>
    </div>
  );
};

export default HeroBottom;
