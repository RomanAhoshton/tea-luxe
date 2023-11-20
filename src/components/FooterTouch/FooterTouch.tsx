import React from "react";
import styles from "./index.module.scss";
import Logo from "../Logo";
import Youtube from "../../icons/Youtube";
import Instagram from "../../icons/Instagram";
import Twitter from "../../icons/Twitter";
import Facebook from "../../icons/Facebook";

const FooterTouch = () => {
  return (
    <div className={styles.touch}>
      <div className={styles.touchTextContent}>
        <p>
          {" "}
          “Tea is a journey. It can take you to new places and open your mind to
          new experiences. Let every sip transport you to a world of wonder and
          possibility”
        </p>
        <span>
          Dragomir Teodorescu, <br />
          Tealuxe owner
        </span>
      </div>
      <div className={styles.toouchActions}>
        <p>Stay In Touch</p>
        <span>
          Please feel free to contact us via the email of phone. We would be
          happy to hear from you!
        </span>
        <div className={styles.touchContent}>
          <Logo />

          <div className={styles.links}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 0C20.6569 0 22 1.34315 22 3V13C22 14.6569 20.6569 16 19 16H3C1.34315 16 0 14.6569 0 13V3C0 1.34315 1.34315 0 3 0H19ZM18.2529 2H3.74718L10.3804 7.23673C10.7437 7.52356 11.2563 7.52356 11.6197 7.23673L18.2529 2ZM2 3.1688V13C2 13.5523 2.44772 14 3 14H19C19.5523 14 20 13.5523 20 13V3.16882L12.8589 8.8065C11.769 9.66697 10.231 9.66697 9.14108 8.8065L2 3.1688Z"
                  fill="#151618"
                />
              </svg>{" "}
              <span>info@tealuxe.com</span>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.7649 20.7244C13.7448 20.2183 9.60927 18.7915 5.86016 15.0423C2.11105 11.2932 0.684203 7.15771 0.178075 5.13763C-0.11279 3.97671 0.410977 2.85647 1.29909 2.2221L3.62734 0.559061C4.98962 -0.413994 6.88472 -0.0838051 7.83764 1.29263L9.30343 3.40989C9.92563 4.30863 9.71102 5.54043 8.82152 6.17578L7.65274 7.01062C7.82963 7.68723 8.37979 9.07669 10.1028 10.7997C11.8258 12.5227 13.2153 13.0729 13.8919 13.2498L14.7267 12.081C15.3621 11.1915 16.5939 10.9769 17.4926 11.5991L19.6099 13.0649C20.9863 14.0178 21.3165 15.9129 20.3434 17.2752L18.6804 19.6034C18.046 20.4915 16.9258 21.0153 15.7649 20.7244ZM7.27437 13.6281C10.6838 17.0375 14.4462 18.3322 16.2509 18.7844C16.5147 18.8505 16.8336 18.748 17.0529 18.4409L18.716 16.1127C19.0403 15.6586 18.9303 15.0269 18.4714 14.7092L16.3542 13.2435L15.4583 14.4977C15.0922 15.0103 14.4151 15.4123 13.6267 15.2422C12.6427 15.0299 10.8237 14.349 8.68859 12.2139C6.5535 10.0788 5.87259 8.25983 5.66027 7.27582C5.49017 6.48743 5.89221 5.81033 6.40479 5.44421L7.65905 4.54831L6.19325 2.43105C5.87561 1.97224 5.24391 1.86218 4.78982 2.18653L2.46157 3.84956C2.15453 4.06888 2.05202 4.38778 2.11811 4.65155C2.57029 6.45631 3.86499 10.2187 7.27437 13.6281Z"
                  fill="#151618"
                />
              </svg>

              <span>+370 680 123456 </span>
            </a>
            <div className={styles.socialLinks}>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Youtube />
              </a>
              <a href="#">
                {" "}
                <Instagram />
              </a>
              <a href="#">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTouch;
