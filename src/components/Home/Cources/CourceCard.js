import imageByIndex from "./imageByIndex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../Slider/slider.module.css";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CourceCard = ({ slides }) => {
  return (
    <div className={styles.emblaContainer}>
      {slides.map((slide, index) => (
        <div
          className={styles.emblaSlide}
          key={index}
          data-rating={slide.rating}
        >
          <img
            className={styles.emblaSlideImg}
            src={imageByIndex(index + 1)}
            alt="Your alt text"
          />

          <h1 style={{ fontSize: "14px" }}>Modern React with MUI & Redux</h1>
          <div className="rating">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div key={i}>
                  <FontAwesomeIcon
                    className={`dot ${
                      i < slide.rating ? "dot-activeColor" : ""
                    }`}
                    icon={faStar}
                  />
                </div>
              ))}
          </div>

          <div className={styles.cardButton}>
            <div>
              <p>${60}/course</p>
            </div>
            <div>
              <button>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourceCard;
