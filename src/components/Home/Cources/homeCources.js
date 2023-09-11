// import HomeCourcesSlider from "./homeCourcesSlider";
import styles from "../homelayout.module.css";
import EmblaCarousel from "../../Slider/EmblaCarousel";
import CourceCard from "./CourceCard";

const HomeCources = () => {
  const OPTIONS = { align: "start", loop: true };
  const SLIDE_COUNT = 5;
  const ratings = [1, 2, 3, 4, 5];

  const SLIDES = Array.from(Array(SLIDE_COUNT).keys()).map((index) => ({
    rating: ratings[index],
  }));

  return (
    <div className={styles.courceContainer}>
      <div>
        <h1>Most Popular Courses</h1>
      </div>
      <div style={{ position: "relative" }}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} Card={CourceCard} />
      </div>
    </div>
  );
};

export default HomeCources;
