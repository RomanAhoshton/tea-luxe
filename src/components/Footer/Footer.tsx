import React from "react";
import styles from "./index.module.scss";
import FooterNav from "../FooterNav";
import FooterTouch from "../FooterTouch";
import Paypal from "../../icons/Paypal";
import Gpay from "../../icons/Gpay";
import Visa from "../../icons/Visa";
import MasterCard from "../../icons/MasterCard";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <FooterNav />
        <FooterTouch />
      </div>
      <div className={styles.footerCopyPayment}>
        <p>© Tealuxe, 2023</p>

        <div className={styles.payment}>
          <a href="#">
            {" "}
            <MasterCard />
          </a>
          <a href="#">
            <Visa />
          </a>
          <a href="#">
            <Gpay />
          </a>
          <a href="#">
            <Paypal />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
