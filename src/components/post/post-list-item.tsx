import React from 'react';
import Link from 'next/link';
import { Title } from '~/components/typography'
import styles from './post-list.module.scss'

const PostListItem = ({post, selectCategory}) => {
  return (
    <article className={styles.article}>
      <Link href={`/posts/${post.slug}`}>
        <>
          <header>
            <Title>{post.title}</Title>
            <span>{post.date}</span>
          </header>
          <p>{post.description}</p>
        </>
      </Link>
      {post.categories.map(category => <p onClick={() => selectCategory(category)}
                                          key={`${post.title}-${category}`}>{category}</p>)}

    </article>
  )
}

export default PostListItem