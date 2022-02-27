import React, { useContext } from 'react'
import PostListItem from './post-list-item'
import styles from './post-list.module.scss'
import { CategoryContext } from '~/context'

const PostList = ({ posts }) => {
  const { category } = useContext(CategoryContext)
  const filterPostsByCategory = (post) => (category !== 'all' ? post.categories.includes(category) : true)

  return (
    <section className={styles.postList}>
      {posts.filter(filterPostsByCategory).map((post) => (
        <PostListItem post={post} key={post.title} />
      ))}
    </section>
  )
}

export default PostList
