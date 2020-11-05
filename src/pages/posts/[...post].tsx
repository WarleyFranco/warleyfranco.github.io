import React from 'react'
import { useRouter } from 'next/router'
import { getPostBySlug, slugWithoutExtension, getSlugs } from '~/lib/posts-api'
import parseMarkdown from '~/utils/parseMarkdown'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostTitle } from '~/components/typography'

// TODO: Create single default post layout

export const getStaticProps: GetStaticProps = async ({ params, locales }) => {
  const slug = `${params.post}.md`
  const fields = ['title', 'category', 'content', 'data', 'description', 'language']
  return {
    props: {
      post: { ...getPostBySlug(slug, fields) },
      locales,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const allPaths = getSlugs()
    .map((slug) => {
      const paths = []
      locales.forEach((locale) => {
        paths.push({ params: { post: [slugWithoutExtension(slug)] }, locale })
      })
      return paths
    })
    .flat()

  console.log(`allPaths`, allPaths)

  return {
    paths: allPaths,
    fallback: false,
  }
}

const Post = ({ post }) => {
  const router = useRouter()
  return (
    <>
      <h1>Slug: {router.query.post}</h1>
      <PostTitle>{post.title}</PostTitle>
      <article>
        <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
      </article>
    </>
  )
}

export default Post
