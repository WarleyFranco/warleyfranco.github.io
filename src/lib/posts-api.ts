import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '~/types/post'

const postsDirectory: string = path.join(process.cwd(), '_posts')

const getSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory)
}

const slugWithoutExtension = (slug): string => slug.replace(/\.md$/g, '')

const getPostBySlug = (slug, fields = []): Post => {
  const slugFullPath = path.join(postsDirectory, slug)
  const slugContent = fs.readFileSync(slugFullPath)
  const { content, data } = matter(slugContent)

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
      const categoriesArray = data[field].split(',').map(category => category.trim())
      item[field] = categoriesArray
    }

  })

  return item
}

const getAllPosts = (): Post[] => {
  const allSlugs = getSlugs()
  const posts = []
  const fields = ['date', 'title', 'categories', 'description', 'slug', 'language']

  allSlugs.forEach((slug) => {
    const result = getPostBySlug(slug, fields)
    result.date = new Date(result.date).getTime()
    posts.push(result)
  })

  posts.sort((a, b) => {
    return b.date - a.date
  })

  return posts
}

export { getSlugs, getAllPosts, getPostBySlug, slugWithoutExtension }
