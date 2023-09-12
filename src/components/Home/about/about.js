import styles from "./about.module.css";
import image1 from "./images/home-feature.webp";
import feature1 from "./images/feature1.PNG";
import feature2 from "./images/feature2.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import GridCard from "./GridCard";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContainerLeft}>
        <img src={image1} alt="Fature-Home"></img>
        <img src={feature1} alt="Fature-Home"></img>
        <img src={feature2} alt="Fature-Home"></img>
      </div>
      <div className={styles.aboutContainerRight}>
        <h1>
          Make your <span style={{ color: "#127C71" }}>Learning </span>
          <br></br>
          Enjoyable
        </h1>
        <p>
          Set the way of learning according to your wishes with some of the
          benefits that you get us, so you on enjoy the lessons that we provide.
        </p>
        <div className={styles.aboutRightGridContainer}>
          <GridCard
            icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />}
            heading="Easy Accessable"
            paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore"
            GridClass={styles.aboutGridItems}
            GridItemClass={styles.aboutGridItem1}
          />
          <GridCard
            icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />}
            heading="More Affordable Cost"
            paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
            GridClass={styles.aboutGridItems}
            GridItemClass={styles.aboutGridItem2}
          />
          <GridCard
            icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />}
            heading="Flexible Study Time"
            paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
            GridClass={styles.aboutGridItems}
            GridItemClass={styles.aboutGridItem3}
          />
          <GridCard
            icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />}
            heading="Consultation With Mentor"
            paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
            GridClass={styles.aboutGridItems}
            GridItemClass={styles.aboutGridItem4}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
