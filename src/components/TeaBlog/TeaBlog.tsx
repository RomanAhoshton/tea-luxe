import React from "react";
import styles from "./index.module.scss";
import Button from "../Button";
import { teaBlog } from "../../constants";
import { useAnimations } from "../../hooks/useAnimations";
import { motion } from "framer-motion";
import More from "../../icons/More";

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
              <div className={styles.imageContainer}>
                <img src={item.image} alt="BlogImage" />
              </div>
              <div className={styles.textBlock}>
                <p className={styles.text}>{item.text}</p>
                <p className={styles.author}>{item.author}</p>
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
