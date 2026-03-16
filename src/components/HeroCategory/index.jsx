import styles from './heroCategory.module.css'

const HeroCategory = () => {
    return (
        <div className={`${styles.categoryContainer} ${styles.women}`}>
            <h2 className={styles.name}>Women's Fashion</h2>
            <p className={styles.item}>500  </p>
            <p className={styles.shopBtn}>Shop now</p>
        </div>
    )
}
export default HeroCategory