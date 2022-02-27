import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '~/types/post';
import yaml from 'js-yaml';

export type PostAPIFields = keyof Post;

const postsDirectory = path.join(process.cwd(), '_posts');

const getSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

const slugWithoutExtension = (slug: string): string => slug.replace(/\.md$/g, '');

const getPostBySlug = (slug: string, locale?: string, fields?: PostAPIFields[]): Partial<Post> => {
  const fileName = locale?.toLowerCase() === 'pt-br' ? `index.${locale.toLowerCase()}.md` : 'index.md';
  const postFilePath = path.join(postsDirectory, slug, fileName);

  try {
    if(!fs.existsSync(postFilePath)) {
      return;
    }
  } catch (err) {
    console.error(err);
  }

  if (!postFilePath) {
    return;
  }

  const postFilePathContent = fs.readFileSync(postFilePath)

  if (!postFilePathContent) {
    return;
  }

  const { content, data } = matter(postFilePathContent, {
    engines: {
      yaml: {
        parse: (str): Record<string, unknown> =>
          yaml.load(str, {
            filename: postFilePath,
            onWarning: (yamlException: yaml.YAMLException): void => {
              console.warn('matter yaml engine exception:', yamlException);
            },
            schema: yaml.JSON_SCHEMA,
          }),
        stringify: (obj): string => yaml.dump(obj),
      },
    },
  });

  if (!fields) {
    return { ...data, content };
  }

  const item = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      item[field] = slugWithoutExtension(slug);
    }

    if (field === 'content') {
      item[field] = content;
    }

    if (data[field]) {
      item[field] = data[field];
    }

    if (field === 'categories') {
      item[field] = data[field].split(',').map((category) => category.trim());
    }
  });

  return item;
};

const getAllPostsByLocale = (locale: string): Partial<Post>[] => {
  const allSlugs = getSlugs();
  const posts = [];
  const fields: PostAPIFields[] = ['created', 'title', 'categories', 'description', 'slug'];

  allSlugs.forEach((slug) => {
    const result = getPostBySlug(slug, locale, fields);

    if (result) {
      posts.push(result);
    }
  });

  // TODO: Double check this sort;
  posts.sort((a, b) => {
    const aDate = new Date(a).getTime();
    const bDate = new Date(b).getTime();
    return bDate - aDate;
  });

  return posts;
};

const getAllCategories = (): Set<string> => {
  const categories = new Set<string>();
  categories.add('all');

  const fields: PostAPIFields[] = ['categories'];

  const allSlugs = getSlugs();
  allSlugs.forEach((slug) => {
    const result = getPostBySlug(slug, null, fields);

    if (result) {
      result.categories.forEach(category => {
        categories.add(category)
      });

    }
  });

  return categories;
}

export { getSlugs, getAllPostsByLocale, getPostBySlug, slugWithoutExtension, getAllCategories };
