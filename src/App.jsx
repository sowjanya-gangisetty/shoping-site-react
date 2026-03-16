import { useState } from 'react'
import styles from './app.module.css'
import Header from './components/Header'
//import Categories from './components/Categories'
import CategoriesContainer from './components/CategoriesContainer'
import  MainCategory from './components/MainCategory'


function App() {
  
  return (
    <>
      <Header/>
      <div className={styles.mainContainer}>
        <MainCategory/>
        <CategoriesContainer />
      </div>
    </>
  )
}

export default App
