import { getAllPosts } from '../../lib/posts-api'
import Link from 'next/link'
import { useContext } from 'react'
import LocaleContext from '../../context/locale.context'
import PostList from '../../components/PostList'

export async function getStaticProps() {
  return {
    props: { posts: [...getAllPosts()] },
  }
}

// TODO: Refactor post tiles (don't forget to split categories right @_@)

const AllPosts = ({ posts }) => {
  console.log(`posts`, posts)
  const locale = useContext(LocaleContext)

  return (
    <>
      <h1>Post List</h1>
      <section>
        <PostList posts={posts} language={locale.language} />
      </section>
    </>
  )
}

export default AllPosts
