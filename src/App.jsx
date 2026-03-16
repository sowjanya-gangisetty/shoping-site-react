import { useState } from 'react'
import styles from './app.module.css'
import Header from './components/Header'
import Categories from './components/Categories'
import  HeroCategory from './components/HeroCategory'


function App() {
  

  return (
    <>
      <Header/>
      <div className={styles.mainContainer}>
        <HeroCategory/>
        <Categories/>
      </div>
    
    </>
  )
}

export default App
