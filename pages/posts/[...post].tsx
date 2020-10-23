import { useRouter } from 'next/router'
import { getPostBySlug, slugWithoutExtension, getSlugs } from '../../lib/posts-api'
import { GetStaticProps } from 'next'

// TODO: Create single default post layout

export async function getStaticProps({ params }) {
  const allPaths = getSlugs().map((slug) => slugWithoutExtension(slug))
  return {
    props: {
      singlePost: { ...getPostBySlug('test.md', ['title', 'categories']) },
    },
  }
}

export async function getStaticPaths() {
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

const Post = (props) => {
  const router = useRouter()
  console.log(props)
  return <h1>Slug: {router.query.post}</h1>
}

export default Post
