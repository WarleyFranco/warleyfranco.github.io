import React from 'react';
import { getPostBySlug, slugWithoutExtension, getSlugs } from '~/lib/posts-api';
import markdownToHtml from '~/utils/markdownToHtml';
import { GetStaticPaths, GetStaticProps } from 'next';

// TODO: Create single default post layout
type PostPageStaticProps = {
  params: {
    post: string;
  };
  locale: string | undefined;
};

export const getStaticProps: GetStaticProps = async ({ params, locale }: PostPageStaticProps) => {
  const slug = `${params.post}.md`;
  return {
    props: {
      post: { ...getPostBySlug(slug, locale) },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const allPaths = locales
    .map((locale) => {
      const paths = [];

      // Create URL paths based on the locale and post translation;
      getSlugs(locale).forEach((slug) => {
        paths.push({ params: { post: [slugWithoutExtension(slug)] }, locale });
      });
      return paths;
    })
    .flat();

  return {
    paths: allPaths,
    fallback: false,
  };
};

const Post = ({ post }): JSX.Element => {
  return (
    <div className="flex justify-center">
      <article className="flex flex-col justify-self-center max-w-4xl prose prose-2xl prose-pink dark:prose-invert">
        <header>
          <h1 className="text-gray-700">{post.title}</h1>
        </header>
        <div
          className="max-w-full"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />
      </article>
    </div>
  );
};

export default Post;
