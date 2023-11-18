import React from "react";
import styles from "./index.module.scss";
import { teaCollection } from "../../constants";

const ExploreCollection = () => {
  return (
    <section className={styles.explore}>
      <div className={styles.exploreContainer}>
        <p className={styles.exploreTopText}>
          "Tea is not just a drink, it's a way of life and a <br/> way to connect with 
          our loved ones."
        </p>
        <div className={styles.teaCollections}>
          <p className={styles.teaTitle}>Explore our Collections</p>
          <div className={styles.teaItems}>
            {teaCollection.map((item) => (
              <div className={styles.teaItem}>
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCollection;
