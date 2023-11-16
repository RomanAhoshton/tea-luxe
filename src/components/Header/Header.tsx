import styles from "./index.module.scss";
import { menuLinks } from "../../constants";
import Bag from "../../icons/Bag";
import User from "../../icons/User";
import Search from "../../icons/Search";
import Logo from "../Logo";
import { useWidth } from "../../hooks/useWidth";
import Burger from "../Burger/Burger";


const Header = () => {
  const { width } = useWidth();
  console.log(width, "width");

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
      {
            width<769 ?<Burger/>:null
          }
      
         
          <Logo />
         
          <nav className={styles.menu}>
            <ul className={styles.menuLinks}>
              {menuLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.link}</a>
                </li>
              ))}
            </ul>
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
          <button>
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
