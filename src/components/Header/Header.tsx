import styles from "./index.module.scss";
import { menuLinks } from "../../constants";
import Bag from "../../icons/Bag";
import User from "../../icons/User";
import Search from "../../icons/Search";
import MobileMenu from "../MobileMenu";
import Logo from "../Logo";
import { useWidth } from "../../hooks/useWidth";
import Burger from "../Burger/Burger";
import { useState } from "react";

const Header = () => {
  const { width } = useWidth();
  const [open, setOpen] = useState<boolean>(false);


  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {width < 785 ? <Burger open={open} setOpen={setOpen} /> : null}

        <Logo />

        {width > 785 ? (
          <nav className={styles.menu}>
            <div className={styles.menuLinks}>
              {menuLinks.map((item, index) => (
     
                <button> {item.link}</button>
       
              ))}
            </div>
          </nav>
        ) : width < 785 && open ? (
          <MobileMenu open={open} setOpen={setOpen} />
        ) : null}

        <div className={styles.actions}>
          <button>
            {" "}
            <Bag />{" "}
          </button>
          <button>
            {" "}
            <User />{" "}
          </button>
          <button>
            <Search />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
