import styles from "./index.module.scss";
import { teaCollection } from "../../constants";
import { motion } from "framer-motion";
import { useAnimations } from "../../hooks/useAnimations";

const ExploreCollection = () => {
  const { controls, ref } = useAnimations();
  return (
    <section className={styles.explore}>
      <div className={styles.exploreContainer}>
        <p className={styles.exploreTopText}>
          "Tea is not just a drink, it's a way of life and a <br /> way to
          connect with our loved ones."
        </p>
        <div className={styles.teaCollections}>
          <motion.p
            className={styles.teaTitle}
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            transition={{ duration: 0.5}}
            ref={ref}
          >
            Explore our Collections
          </motion.p>
          <motion.div
            className={styles.teaItems}
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            transition={{ duration: 1 }}
            ref={ref}
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
