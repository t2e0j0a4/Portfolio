import React from 'react'
import styles from "./Heading.module.css";

const Heading = ({title, color = "#000000"}) => {
  return (
    <h1 style={{ color : `${color}` }} className={styles.heading}>{title ? title : 'Heading'}</h1>
  )
}

export default Heading