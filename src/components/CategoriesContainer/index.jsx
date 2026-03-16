import styles from './categoriesContainer.module.css'
import Categories  from '../Categories'
//import {categoriesData} from '../../data/data.js'

export const categoriesData = [
    {
        name : "Man's Fashion",
        Items : "23",
        image : "men.jpeg"
    },
    {
        name : "Kid's Fashion",
        items : "123",
        image : "kids.jpeg"
    },
     {
        name : "Kid's Fashion",
        items : "123",
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