import React from "react";
import styles from "./index.module.scss";
import { prioritise } from "../../constants";

const Prioritise = () => {
  return (
    <section className={styles.prioritise}>
      <div className={styles.prioritiseContainer}>
        <p className={styles.prioritiseTitle}>We Prioritise</p>
        <div className={styles.prioritiseItems}>
          {prioritise.map((item) => (
            <div className={styles.prioritiseItem}>
                <p>{item.title}</p>
                <span>{item.subtitle}</span>
                <img src={item.icon} alt="prioritise" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prioritise;
