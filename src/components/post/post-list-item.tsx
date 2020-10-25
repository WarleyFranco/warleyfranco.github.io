import React from 'react';
import Link from 'next/link';
import {PostTitle} from '~/components/typography'
import styles from './post-list.module.scss'

const CategoryTag = ({categories, selectCategory}) => {
  return categories.map(category =>
    <span
      onClick={() => selectCategory(category)}
      key={`${category}`}
      className={`${styles[category]} ${styles.categoryTag}`}
    >
      #{category}
    </span>
  )
}

const PostListItem = ({post, selectCategory, language}) => {
  const normalizedLanguage = language === 'pt-BR' ? language : 'en-US';
  const date = new Date(post.date).toLocaleDateString(normalizedLanguage, {
    timeZone: 'UTC', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <article className={styles.article}>

      <>
        <header>

            <PostTitle postLink={`/posts/${post.slug}`}>{post.title}</PostTitle>
          <p className={styles.date}>{date}</p>
        </header>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.categories}>
          <CategoryTag categories={post.categories} selectCategory={selectCategory}/>
        </div>
      </>


    </article>
  )
}

export default PostListItem