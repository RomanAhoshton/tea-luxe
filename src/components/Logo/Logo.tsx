import styles from "./index.module.scss";
import { useWidth } from "../../hooks/useWidth";
import { headerLogo } from "../../constants";

const Logo = () => {
  const {width}=useWidth()
 


  return (
    <div className={styles.logoBlock}>
      <a href="#"><img src={headerLogo}alt="Logo" /></a>
      
    </div>
  );
};

export default Logo;
