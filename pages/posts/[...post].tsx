import { useRouter } from 'next/router'
import { getPostBySlug, slugWithoutExtension, getSlugs } from '../../lib/posts-api'
import { GetStaticPaths, GetStaticProps } from 'next'

// TODO: Create single default post layout

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      singlePost: { ...getPostBySlug('test.md', ['title', 'categories']) },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPaths = getSlugs().map((slug) => {
    return {
      params: { post: [slugWithoutExtension(slug)] },
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

const Post = () => {
  const router = useRouter()
  return <h1>Slug: {router.query.post}</h1>
}

export default Post
