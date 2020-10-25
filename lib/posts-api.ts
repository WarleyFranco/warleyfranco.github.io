import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '../types/post'

const postsDirectory: string = path.join(process.cwd(), '_posts')

const getSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory)
}

const slugWithoutExtension = (slug): string => slug.replace(/\.md$/g, '')

// TODO: Find a way to render different posts based on the language!
// Draft: _posts/eng _posts/pt-br
// Use locale context to check which posts should be loaded
// Maybe use some front matter properties to filter (Not sure about this approach)

const getPostBySlug = (slug, fields = []): Post => {
  const slugFullPath = path.join(postsDirectory, slug)
  const slugContent = fs.readFileSync(slugFullPath)
  const { content, data } = matter(slugContent)

  const item = {}

  fields.map((field) => {
    if (field === 'slug') {
      item[field] = slugWithoutExtension(slug)
    }

    if (field === 'content') {
      item[field] = content
    }

    if (field === 'categories') {
      item[field] = data[field].split(',')
    }

    if (data[field]) {
      item[field] = data[field]
    }
  })

  return item
}

const getAllPosts = (): Post[] => {
  const allSlugs = getSlugs()
  const posts = []
  const fields = ['date', 'title', 'categories', 'description', 'slug', 'language']

  allSlugs.map((slug) => {
    const result = getPostBySlug(slug, fields)
    result.date = new Date(result.date).getTime()
    posts.push(result)
  })

  posts.sort((a, b) => {
    // Shortcut monstro do Iago!
    return b.date - a.date
  })

  return posts
}

export { getSlugs, getAllPosts, getPostBySlug, slugWithoutExtension }
