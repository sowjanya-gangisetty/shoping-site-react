import styles from './categoriesContainer.module.css'
import Categories  from '../Categories'
//import {categoriesData} from '../../data/data.js'

export const categoriesData = [
    {
        name : "men",
        items : "232",
        image : "men.jpeg"
    },
    {
        name : "kids",
        items : "123",
        image : "kids.jpeg"
    },
     {
        name : "cosmetics",
        items : "15",
        image : "kids.jpeg"
    },
    {
        name : "accessories",
        items : "25",
        image : "kids.jpeg"
    }
]
const CategoriesContainer = () => {
    return (
        <div className={styles.categoriesContainer}>
            {categoriesData.map((categoryInfo, index) => (
                <Categories key={index} {...categoryInfo} />)
            )}
        </div>
    )
}

export default CategoriesContainer