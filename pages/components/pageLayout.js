import React from 'react'
import styles from '/styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'

const pageLayout = ({children}) => {
  return (
    <>
        <Nav />
        <Header />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    </>
  )
}

export default pageLayout