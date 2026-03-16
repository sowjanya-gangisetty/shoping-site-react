import styles from './navigation.module.css'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";


const  categories = ["Home", "Men", "Women", "Kids", "Cosmetics" , "Accessories"]


const Navigation = () => {

    const [mobileMenu, setMobileMenu] = useState(false) 

    const showMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return(

        <nav className={styles.navigation}>
            <RxHamburgerMenu  onClick={showMobileMenu} className={styles.mobileIcon} size={32} />
            <div className={`${styles.navContainer}  ${mobileMenu ? styles.active : ''}`}>
                <div className={styles.menuItems}>{categories.map((category, index) => <span key={index} className={styles.category}>{category}</span>)}</div>
            </div>
        </nav>
    )
}

export default Navigation