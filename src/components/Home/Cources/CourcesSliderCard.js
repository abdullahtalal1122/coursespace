import Button from "../../Utils/button";
import styles from "../layout.module.css";

const Card = ({ width, src, price = "60", className }) => {
  return (
    <div className={`${styles.sliderCardContainer} ${className}`}>
      <div>
        <img src={src} alt="slider-img" width={width}></img>
      </div>
      <div>
        <h1 style={{ fontSize: "14px" }}>Modern React with MUI & Reduy</h1>
      </div>
      <div style={{ display: "flex" }}>
        <p>${price}/cource</p>
        <Button value="(:" />
      </div>
    </div>
  );
};

export default Card;
