import React from "react";
import styles from "./index.module.scss";
import Button from "../Button";
import { teaBlog } from "../../constants";
import { useAnimations } from "../../hooks/useAnimations";
import { motion } from "framer-motion";

const TeaBlog = () => {
  const { controls, ref } = useAnimations();

  return (
    <section className={styles.teaBlog}>
      <div className={styles.blogContainer}>
        <motion.p
          className={styles.blogTitle}
          initial={{ opacity: 0, y: -40 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          Our Tea Blog
        </motion.p>
        <motion.div
          className={styles.blog}
          initial={{ opacity: 0, y: -40 }}
          animate={controls}
          transition={{ duration: 1.5 }}
          ref={ref}
        >
          {teaBlog.map((item, index) => (
            <div className={styles.blogItem} key={index}>
              <img src={item.image} alt="BlogImage" />
              <div className={styles.textBlock}>
                <p>{item.text}</p>
                <span>{item.author}</span>
                <div className={styles.read}>
                  <span>{item.read}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <Button text="View all" />
    </section>
  );
};

export default TeaBlog;
