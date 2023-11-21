import React from "react";
import styles from "./index.module.scss";
import { prioritise } from "../../constants";
import { useAnimations } from "../../hooks/useAnimations";
import { motion } from "framer-motion";

const Prioritise = () => {
  const { controls, ref } = useAnimations();
  return (
    <section className={styles.prioritise}>
      <div className={styles.prioritiseContainer}>
        <motion.p
          className={styles.prioritiseTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 1.5 }}
          ref={ref}
        >
          We Prioritise
        </motion.p>
        <motion.div
          className={styles.prioritiseItems}
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 1.5 }}
          ref={ref}
        >
          {prioritise.map((item) => (
            <div className={styles.prioritiseItem}>
              <p>{item.title}</p>
              <span>{item.subtitle}</span>
              <img src={item.icon} alt="prioritise" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Prioritise;
