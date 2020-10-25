import React from 'react'
import { useRouter } from 'next/router'
import { getPostBySlug, slugWithoutExtension, getSlugs } from '~/lib/posts-api'
import parseMarkdown from '~/utils/parseMarkdown'
import { GetStaticPaths, GetStaticProps } from 'next'

// TODO: Create single default post layout

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = `${params.post}.md`
  const fields = ['title', 'category', 'content', 'data', 'description', 'language']
  return {
    props: {
      post: { ...getPostBySlug(slug, fields) },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPaths = getSlugs().map((slug) => {
    return { params: { post: [slugWithoutExtension(slug)] } }
  })

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
      <h1>Title: {post.title}</h1>
      <article>
        <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
      </article>
    </>
  )
}

export default Post
