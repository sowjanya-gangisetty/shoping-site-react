import styles from './mainCategory.module.css'

const MainCategory = () => {
    return (
        <div className={`${styles.mainCategory} ${styles.women}`}>
            <h2 className={styles.name}>Women's Fashion</h2>
            <p className={styles.item}> 500  </p>
            <p className={styles.shopBtn}>Shop now</p>
        </div>
    )
}
export default MainCategory