import React from "react";
// import { MainImage } from "../../constants";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { isVisible } from "@testing-library/user-event/dist/utils";

const MainBanner = () => {
  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerContainer}>
        <div className={styles.contentConteiner}>
          <motion.h2
            className={styles.bannerTitle}
            initial={{ opacity: 0, x: -700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            A cup of tea is a moment of calm in the chaos of life
          </motion.h2>
          <motion.p
            className={styles.bannerSubtitle}
            initial={{ opacity: 0, x: -700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Wide selection of high-quality teas from all over the world,
            carefully curated by tea experts.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
