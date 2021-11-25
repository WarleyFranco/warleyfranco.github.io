import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '~/types/post';
import yaml from 'js-yaml';

export type PostAPIFields = keyof Post;

const postsDirectory = (locale: string): string => path.join(process.cwd(), '_posts', locale);

const getSlugs = (locale: string): string[] => {
  return fs.readdirSync(postsDirectory(locale));
};

const slugWithoutExtension = (slug: string): string => slug.replace(/\.md$/g, '');

const getPostBySlug = (slug: string, locale: string, fields?: PostAPIFields[]): Partial<Post> => {
  const slugFullPath = path.join(postsDirectory(locale), slug);
  const slugContent = fs.readFileSync(slugFullPath);
  const { content, data } = matter(slugContent, {
    engines: {
      yaml: {
        parse: (str): Record<string, unknown> =>
          yaml.load(str, {
            filename: slugFullPath,
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
  const allSlugs = getSlugs(locale);
  const posts = [];
  const fields: PostAPIFields[] = ['created', 'title', 'categories', 'description', 'slug'];

  allSlugs.forEach((slug) => {
    const result = getPostBySlug(slug, locale, fields);
    posts.push(result);
  });

  posts.sort((a, b) => {
    const aDate = new Date(a).getTime();
    const bDate = new Date(b).getTime();
    return bDate - aDate;
  });

  return posts;
};

export { getSlugs, getAllPostsByLocale, getPostBySlug, slugWithoutExtension };
