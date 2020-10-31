import React, { useContext } from 'react'
import { PostTitle } from '~/components/typography'
import styles from './post-list.module.scss'
import formatDate from '~/utils/formatDate'
import { Post } from '~/types/post'
import { LocaleContext, CategoryContext } from '~/context'

const CategoryTags = ({ categories }: CategoryTagProps) => {
  const { selectCategory } = useContext(CategoryContext)
  return (
    <>
      {categories.map((category) => (
        <span
          onClick={() => selectCategory(category)}
          key={`${category}`}
          className={`${styles[category]} ${styles.categoryTag}`}
        >
          #{category}
        </span>
      ))}
    </>
  )
}

const PostListItem = ({ post }: PostListItemProps) => {
  const { language } = useContext(LocaleContext)
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
          <CategoryTags categories={post.categories} />
        </div>
      </>
    </article>
  )
}

type CategoryTagProps = {
  categories: string[]
}

type PostListItemProps = {
  post: Post
}

export default PostListItem
