import Button from "../../Utils/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStamp } from "@fortawesome/free-solid-svg-icons";
import Ptag from "../../Utils/Ptag";
import image1 from "./images/home-hero.webp";
import styles from "../homelayout.module.css";

const HeroUpper = () => {
  return (
    <div className={styles.heroUpper}>
      <div className={styles.heroUpperLeft}>
        <h2>
          <span style={{ color: "#127C71" }}>Improve</span> your Skill with
          Different Way
        </h2>
        <Ptag
          value="Let's take an online course to improve your skills in a different
                way, you can set your own study time according to your learning
                speed. So you san study comfortable and absorb tge material easily."
          margin="0px 0px 20px 0px"
        />
        <Button value="Get Started"></Button>
        <Button
          value=" &#xf04b; Watch Video"
          primryColor="#127C71"
          backgroundColor="#fff"
          border="2px solid #127C71"
          margin="0px 0px 0px 10px"
        ></Button>
        <div className={styles.heroUpperLeftLastContainer}>
          <div>
            <FontAwesomeIcon icon={faStamp} style={{ color: "#127C71" }} />
          </div>
          <div>
            <h1>Certificates</h1>
            <Ptag
              value="There are certificates for all courses."
              padding="5px 0px"
            />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={image1} alt="Hero-Home" width="100%"></img>
      </div>
    </div>
  );
};

export default HeroUpper;
