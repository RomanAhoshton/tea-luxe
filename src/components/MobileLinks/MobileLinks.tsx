import React from "react";
import styles from "./index.module.scss";
import { mobileLinks } from "../../constants";

const MobileLinks = () => {
  return (
    <div className={styles.mobileLinks}>
      <ul className={styles.mobileLinksList}>
        {mobileLinks.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileLinks;
