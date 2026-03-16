import styles from './shoppingCart.module.css'
import { RxBackpack } from "react-icons/rx";

const ShopingCart = () => {
    return(
        <div className={styles.cart}>
            <RxBackpack size={30}/>
        </div>
    )
}
export default ShopingCart