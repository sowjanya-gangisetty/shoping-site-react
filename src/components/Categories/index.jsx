import styles from './categories.module.css'
//import {getImageURL} from '../../utils/imageFunctions.js'


const Categories = ({name, items}) => {
    return(
        <div className={styles.categories}>
            <div className={`${styles.categoryContainer} ${styles[name]}`}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.item}> {items} Items  </p>
                <p className={styles.shopBtn}>Shop now</p>
            </div>
        </div>
    )
}
export default Categories