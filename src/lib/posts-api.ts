import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '~/types/post'

export type PostAPIFields = Array<keyof Post>

const postsDirectory = (locale: string): string => path.join(process.cwd(), '_posts', locale)

const getSlugs = (locale: string): string[] => {
  return fs.readdirSync(postsDirectory(locale))
}

const slugWithoutExtension = (slug: string): string => slug.replace(/\.md$/g, '')

const getPostBySlug = (slug: string, locale: string, fields?: PostAPIFields): Post => {
  const slugFullPath = path.join(postsDirectory(locale), slug)
  const slugContent = fs.readFileSync(slugFullPath)
  const { content, data } = matter(slugContent)

  if (!fields) {
    data.date = JSON.stringify(data.date)
    return { ...data, content }
  }

  const item = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      item[field] = slugWithoutExtension(slug)
    }

    if (field === 'content') {
      item[field] = content
    }

    if (data[field]) {
      item[field] = data[field]
    }

    if (field === 'categories') {
      item[field] = data[field].split(',').map((category) => category.trim())
    }
  })

  return item
}

const getAllPostsByLocale = (locale: string): Post[] => {
  const allSlugs = getSlugs(locale)
  const posts = []
  const fields: PostAPIFields = ['date', 'title', 'categories', 'description', 'slug']

  allSlugs.forEach((slug) => {
    const result = getPostBySlug(slug, locale, fields)
    result.date = JSON.stringify(result.date)
    posts.push(result)
  })

  posts.sort((a, b) => {
    const aDate = new Date(a).getTime()
    const bDate = new Date(b).getTime()
    return bDate - aDate
  })

  return posts
}

export { getSlugs, getAllPostsByLocale, getPostBySlug, slugWithoutExtension }
