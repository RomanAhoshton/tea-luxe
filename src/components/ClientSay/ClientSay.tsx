import React from "react";
import { Clients } from "../../constants";
import styles from "./index.module.scss";

const ClientSay = () => {
  return (
    <section className={styles.clientSay}>
      <div className={styles.clientContainer}>
        <p className={styles.clientTitle}>What our Clients say</p>

        <div className={styles.clientsOpinions}>
          {Clients.map((item) => (
            <div className={styles.clientOpinion}>
              <p className={styles.clientText}>{item.text}</p>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSay;
