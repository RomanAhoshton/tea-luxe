import React from "react";
import styles from "./index.module.scss";
import Bag from "../../icons/Bag";
import User from "../../icons/User";
import Search from "../../icons/Search";

const MobileActions = () => {
  return (
    <div className={styles.mobileActions}>
      <a href="#">
        {" "}
        <Bag />{" "}
      </a>
      <a href="#">
        {" "}
        <User />{" "}
      </a>
      <a href="#">
        {" "}
        <Search />{" "}
      </a>
    </div>
  );
};

export default MobileActions;
