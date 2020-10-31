import React from 'react'
import { PostTitle } from '~/components/typography'
import styles from './post-list.module.scss'
import formatDate from '~/utils/formatDate'
import { Post } from '~/types/post'

const CategoryTag = ({ categories, selectCategory }) => {
  return categories.map(category =>
    <span
      onClick={() => selectCategory(category)}
      key={`${category}`}
      className={`${styles[category]} ${styles.categoryTag}`}
    >
      #{category}
    </span>,
  )
}

const PostListItem = ({ post, selectCategory, language }: PostListItemProps) => {
  const normalizedLanguage = language === 'pt-BR' ? language : 'en-US'
  const date = formatDate(post.date, normalizedLanguage)

  return (
    <article className={styles.article}>
      <>
        <header>

          <PostTitle postLink={`/posts/${post.slug}`}>{post.title}</PostTitle>
          <p className={styles.date}>{date}</p>
        </header>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.categories}>
          <CategoryTag categories={post.categories} selectCategory={selectCategory} />
        </div>
      </>
    </article>
  )
}

type PostListItemProps = {
  post: Post,
  selectCategory: () => {},
  language: string
}

export default PostListItem