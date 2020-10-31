import React, { useContext } from 'react'
import PostListItem from './post-list-item'
import styles from './post-list.module.scss'
import { LocaleContext, CategoryContext } from '~/context'

const PostList = ({ posts }) => {
  const { category } = useContext(CategoryContext)
  const { language } = useContext(LocaleContext)

  return (
    <section className={styles.postList}>
      {posts
        .filter((post) => {
          const postLanguage = post.language.toLowerCase() === language.toLowerCase()
          const postCategory = category ? post.categories.includes(category) : true
          return postLanguage && postCategory
        })
        .map((post) => (
          <PostListItem post={post} key={post.title} />
        ))}
    </section>
  )
}

export default PostList
