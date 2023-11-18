import styles from "./index.module.scss";
import { teaCollection } from "../../constants";
import { motion } from "framer-motion";
import { useAnimate } from "../../hooks/useAnimate";

const ExploreCollection = () => {
  const { controls } = useAnimate();
  return (
    <section className={styles.explore}>
      <div className={styles.exploreContainer}>
        <motion.p
          className={styles.exploreTopText}
          initial={{ opacity: 0, x: -700 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          "Tea is not just a drink, it's a way of life and a <br /> way to
          connect with our loved ones."
        </motion.p>
        <div className={styles.teaCollections}>
          <motion.p
            className={styles.teaTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            Explore our Collections
          </motion.p>
          <motion.div
            className={styles.teaItems}
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            {teaCollection.map((item) => (
              <div className={styles.teaItem}>
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCollection;
