import React from 'react'
import { getAllPosts } from '~/lib/posts-api'
import { useContext } from 'react'
import PostList from '~/components/post/post-list'
import { CategoryContext } from '~/context'
import { PageTitle } from '~/components/typography'

export async function getStaticProps() {
  return {
    props: { posts: [...getAllPosts()] },
  }
}

const AllPosts = ({ posts }) => {
  const { category } = useContext(CategoryContext)
  return (
    <>
      <PageTitle>Post List: #{category}</PageTitle>
      <PostList posts={posts} />
    </>
  )
}

export default AllPosts
