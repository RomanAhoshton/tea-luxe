import styles from "./index.module.scss";
import { menuLinks } from "../../constants";
import Bag from "../../icons/Bag";
import User from "../../icons/User";
import Search from "../../icons/Search";
import Logo from "../Logo";
import { useWidth } from "../../hooks/useWidth";
import Burger from "../Burger/Burger";
import { useEffect, useState } from "react";
import Close from "../Close";
import DecorMenu from "../DecorMenu";
import MobileLinks from "../MobileLinks";
import MobileActions from "../MobileActions";
import { useSwipeable } from "react-swipeable";

const Header = () => {
  const { width } = useWidth();
  const [open, setOpen] = useState<boolean>(false);

  const handlers = useSwipeable({
    onSwipedUp: () =>   setOpen(!open)
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = 'unset';
    }
  }, [open]);


  return (
    <header className={styles.header}
    {...handlers}
    >
      <div className={styles.headerContainer}>
        {width < 785 ? <Burger open={open} setOpen={setOpen} /> : null}

        <Logo />

        <nav className={`${styles.menu} ${open ? styles.open : styles.close}`}>
          {width < 785 ? <Close open={open} setOpen={setOpen} /> : null}

          <div className={styles.menuLinks}>
            {menuLinks.map((item, index) => (
              <button key={index}> {item.link}</button>
            ))}
          </div>
          {width < 785 ? <DecorMenu /> : null}
          {width < 785 ? <MobileLinks /> : null}
          {width < 785 ? <MobileActions /> : null}
        </nav>

        <div className={styles.actions}>
          <button>
            {" "}
            <Bag />{" "}
          </button>
          <button>
            {" "}
            <User />{" "}
          </button>
          <button className={styles.lastAction}>
            <Search />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
