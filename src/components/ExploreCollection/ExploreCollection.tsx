import styles from "./index.module.scss";
import { teaCollection } from "../../constants";
import { motion } from "framer-motion";
import { useAnimations } from "../../hooks/useAnimations";
import { useWidth } from "../../hooks/useWidth";

const ExploreCollection = () => {
  const { controls, ref } = useAnimations();
  const {width}=useWidth()
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
            transition={{ duration:  width<768?0.5:1 }}
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
