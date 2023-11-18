import React from "react";
import styles from "./index.module.scss";
import Button from "../Button";
import { teaBlog } from "../../constants";
import More from "../../icons/More";

const TeaBlog = () => {
  return (
    <section className={styles.teaBlog}>
      <div className={styles.blogContainer}>
        <p className={styles.blogTitle}>Our Tea Blog</p>
        <div className={styles.blog}>
          {teaBlog.map((item) => (
            <div className={styles.blogItem}>
              <img src={item.image} alt="BlogImage" />
              <div className={styles.textBlock}>
                <p>{item.text}</p>
                <span>{item.author}</span>
                <div className={styles.read}>
                  <span>{item.read}</span>
                  <More />
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
      <Button text="View all" />
    </section>
  );
};

export default TeaBlog;
