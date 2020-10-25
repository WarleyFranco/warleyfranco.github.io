import React from 'react'
import {getAllPosts} from '~/lib/posts-api'
import {useContext} from 'react'
import LocaleContext from '~/context/locale.context'
import PostList from '~/components/post/post-list'
import CategoryContext from '~/context/category.context';

export async function getStaticProps() {
  return {
    props: {posts: [...getAllPosts()]},
  }
}

const AllPosts = ({posts}) => {
  const locale = useContext(LocaleContext)
  const {category, selectCategory} = useContext(CategoryContext)

  return (
    <>
      <h1>Post List</h1>
      <span>Dev Category: {category}</span>
      <PostList posts={posts} language={locale.language} category={category} selectCategory={selectCategory}/>
    </>
  )
}

export default AllPosts
