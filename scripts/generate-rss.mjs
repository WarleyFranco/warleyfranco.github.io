import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const slugWithoutExtension = (slug) => slug.replace(/\.md$/g, '');
const postsDirectory = path.join(process.cwd(), '_posts');

const getPostBySlug = (slug, locale, fields) => {
  const fileName =
    locale?.toLowerCase() === 'pt-br' ? `index.${locale.toLowerCase()}.md` : 'index.md';
  const postFilePath = path.join(postsDirectory, slug, fileName);

  try {
    if (!fs.existsSync(postFilePath)) {
      return;
    }
  } catch (err) {
    console.error(err);
  }

  if (!postFilePath) {
    return;
  }

  const postFilePathContent = fs.readFileSync(postFilePath);

  if (!postFilePathContent) {
    return;
  }

  const { content, data } = matter(postFilePathContent, {
    engines: {
      yaml: {
        parse: (str) =>
          yaml.load(str, {
            filename: postFilePath,
            onWarning: (yamlException) => {
              console.warn('matter yaml engine exception:', yamlException);
            },
            schema: yaml.JSON_SCHEMA,
          }),
        stringify: (obj) => yaml.dump(obj),
      },
    },
  });

  return { ...data, content, slug };
};

const getAllPostsByLocale = (locale) => {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = [];

  slugs.forEach((slug) => {
    const result = getPostBySlug(slug, locale);

    if (result) {
      posts.push(result);
    }
  });

  posts.sort((a, b) => {
    const aDate = new Date(a).getTime();
    const bDate = new Date(b).getTime();
    return bDate - aDate;
  });

  return posts;
};

const generateRss = () => {
  console.log('Start generate posts');
  const allPosts = getAllPostsByLocale('en-CA');

  fs.writeFileSync(
    path.join(process.cwd(), 'src/pages/api/rss/feed.json'),
    JSON.stringify(allPosts)
  );
};

generateRss();
