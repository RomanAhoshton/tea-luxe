import { BurgerIcon } from "../../constants";
import styles from "./index.module.scss";

interface Props {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const Burger = ({ open, setOpen }: Props) => {
  return (
    <button className={styles.button} onClick={() => setOpen(!open)}>
      <img src={BurgerIcon} alt="BurgerIcon" />
    </button>
  );
};

export default Burger;
