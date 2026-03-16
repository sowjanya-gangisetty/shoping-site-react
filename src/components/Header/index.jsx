import styles from './header.module.css'
import Logo from '../Logo'
import Navigation from '../Navigation'
import ShopingCart from '../ShoppingCart'

const Header = () => {
    return(
        <div className={styles.headerContainer}>
            <Logo />
            <Navigation/>
            <ShopingCart/>
        </div>
        
        

    )
}
export default Header 