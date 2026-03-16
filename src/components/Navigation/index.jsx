import styles from './navigation.module.css'

const  categories = ["Men", "Women", "Kids", "Cosmetics" , "Accessories"]

const Navigation = () => {
    return(

        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <div className={styles.menuItems}>{categories.map((category, index) => <span key={index} className={styles.category}>{category}</span>)}</div>
            </div>
        </nav>
    )
}

export default Navigation