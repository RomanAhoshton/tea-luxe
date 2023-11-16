
import { BurgerIcon } from '../../constants'
import styles from './index.module.scss'


const Burger=()=> {
  return (
    <button className={styles.button}>
        <img src={BurgerIcon} alt='BurgerIcon'/>
    </button>

  )
}

export default Burger