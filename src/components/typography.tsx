import React from 'react'
import styles from './typography.module.scss'
import Link from 'next/link'

type PostTitleProps = {
  children: string
  postLink?: string
  locale?: string
}

const PostTitle = ({ children, postLink = '', locale = '' }: PostTitleProps) => (
  <h3 className={styles.postTitleWrapper}>
    {postLink && locale ? (
      <Link href={postLink} locale={locale}>
        <a className={styles.postTitle}>{children}</a>
      </Link>
    ) : (
      <span className={styles.postTitle}>{children}</span>
    )}
  </h3>
)

const PageTitle = ({ children }) => <h2 className={styles.pageTitle}>{children}</h2>

export { PageTitle, PostTitle }
