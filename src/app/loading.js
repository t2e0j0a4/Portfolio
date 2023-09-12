import React from 'react'
import styles from "@/app/loading.module.css";

const loading = () => {
  return (
    <main className={styles.app__loading}>
        <div className={styles.chase}></div>
    </main>
  )
}

export default loading