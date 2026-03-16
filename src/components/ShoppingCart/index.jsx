import styles from './shoppingCart.module.css'
import { RxBackpack } from "react-icons/rx";

const ShopingCart = () => {
    return(
        <div className={styles.cart}>
            <RxBackpack />
        </div>
    )
}
export default ShopingCart