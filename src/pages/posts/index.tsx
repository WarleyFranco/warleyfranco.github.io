import React from 'react'
import { getAllPostsByLocale } from '~/lib/posts-api'
import { useContext } from 'react'
import PostList from '~/components/post/post-list'
import { CategoryContext } from '~/context'
import { PageTitle } from '~/components/layout/typography'

export async function getStaticProps({ locale }) {
  return {
    props: { posts: [...getAllPostsByLocale(locale)], locale },
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
