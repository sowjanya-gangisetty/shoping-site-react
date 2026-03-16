import styles from './categories.module.css'
//import {getImageURL} from '../../utils/imageFunctions.js'


const Categories = ({name, items}) => {
    return(
        <div className={styles.categories}>
            <div className={`${styles.categoryContainer} ${styles.men}`}>
                <h2 className={styles.name}>Men's Fashion</h2>
                <p className={styles.item}> 250 </p>
                <p className={styles.shopBtn}>Shop now</p>
            </div>
            <div className={`${styles.categoryContainer} ${styles.kids}`}>
                <h2 className={styles.name}>Kid's Fashion</h2>
                <p className={styles.item}> 300 </p>
                <p className={styles.shopBtn}>Shop now</p>
            </div>
            <div className={`${styles.categoryContainer} ${styles.cosmetics}`}>
                <h2 className={styles.name}>Cosmetics</h2>
                <p className={styles.item}> 55 </p>
                <p className={styles.shopBtn}>Shop now</p>
            </div>
            <div className={`${styles.categoryContainer} ${styles.accessories}`}>
                <h2 className={styles.name}>Accessories</h2>
                <p className={styles.item}> 50 </p>
                <p className={styles.shopBtn}>Shop now</p>
            </div>
            
        </div>
    )
}
export default Categories