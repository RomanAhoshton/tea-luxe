import React from "react";
import { company, products } from "../../constants";
import styles from './index.module.scss'

const FooterNav = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.products}>
        <p>Products</p>
        <ul>
          {products.map((item) => (
            <li>
              {" "}
              <a href={item.href}>{item.product}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.company}>
        <p>Company</p>
        <ul>
          {company.map((item) => (
            <li>
              {" "}
              <a href={item.href}>{item.link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterNav;
