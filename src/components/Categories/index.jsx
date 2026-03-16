import styles from './categories.module.css'
import {getImageURL} from '../../utils/imageFunctions.js'


const Categories = ({name, items}) => {
    return(
        <div className={styles.categories}>
            <div className={styles.categoryContainer}>
                <h2 className={styles.name}>{name}Men's Fashion</h2>
                <p className={styles.item}> {items} 123</p>
                <p className={styles.shopBtn}>Shop Now</p>
            </div>
            
        </div>
    )
}
export default Categories