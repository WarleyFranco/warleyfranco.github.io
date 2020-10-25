import React from 'react'
import styles from './typography.module.scss'

const Title = ({ children }) => <h2 className={styles.titleWrapper}><a className={styles.title}>{children}</a></h2>

export {
  Title
}