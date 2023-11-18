import React from "react";
import { MainImage } from "../../constants";
import styles from "./index.module.scss";
import { url } from "inspector";

const MainBanner = () => {
  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerContainer}>
        <div className={styles.contentConteiner}>
          <h2 className={styles.bannerTitle}>
            A cup of tea is a moment of calm in the chaos of life
          </h2>
          <p className={styles.bannerSubtitle}>
            Wide selection of high-quality teas from all over the world,
            carefully curated by tea experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
