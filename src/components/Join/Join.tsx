import React from "react";
import styles from "./index.module.scss";
import Button from "../Button";
import { useOnInput } from "../../hooks/useOnInput";


const Join = () => {
  const { inputRef, value, setValue, isFocused, setFocused } = useOnInput();

  return (
    <section className={styles.join}>
      <div className={styles.joinContainer}>
        <div className={styles.textWrapper}>
          <p className={styles.joinTitle}>Want to know more?</p>
          <p className={styles.joinDescription}>
            Join our mailing list and stay up-to-date with the latest news,
            promotions, and exclusive offers from our tea store. Be the first to
            know about new tea arrivals, seasonal blends, and special discounts.
            Don't miss out on the tea-rrific perks - sign up today!
          </p>
        </div>
        <div className={styles.formWrapper}>
          <form>
            <div className={styles.formActions}>
              <label
                htmlFor="input"
                className={!isFocused ? styles.label : styles.labelFocused}
              >
                Enter your email
              </label>
              <input
                type="text"
                name="input"
                id="input"
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={(e) => setFocused(!isFocused)}
              />
              <Button text="join" />
            </div>

            <div className={styles.checkbox}>
              <input type="checkbox" />
              <p>
                We take your privacy seriously and are committed to protecting
                your personal information. By subscribing to our mailing list,
                you are consenting to receive periodic emails from us about our
                products, promotions, and other tea-related information.{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;
