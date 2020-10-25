import React from 'react'
import styles from './typography.module.scss'
import Link from 'next/link';

const PostTitle = ({ children, postLink }) => (
  <h3 className={styles.postTitleWrapper}>
    <Link href={postLink}>
      <a className={styles.postTitle}>{children}</a>
    </Link>
  </h3>
)

const PageTitle = ({ children }) => (
  <h2 className={styles.pageTitle}>{children}</h2>
)



export {
  PageTitle,
  PostTitle
}