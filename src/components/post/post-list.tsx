import React from 'react'
import PostListItem from './post-list-item'
import styles from './post-list.module.scss'

const PostList = ({posts, category, language, selectCategory}) => {

  return (
    <section className={styles.postList}>
      {posts
        .filter((post) => {
          const postLanguage = post.language.toLowerCase() === language.toLowerCase()
          const postCategory = category ? post.categories.includes(category) : true
          return postLanguage && postCategory
        })
        .map((post) => <PostListItem post={post} key={post.title} selectCategory={selectCategory}/>)
      }
    </section>
  )
}

export default PostList
