import React from 'react';
import { useRouter } from 'next/router';
import { getPostBySlug, slugWithoutExtension, getSlugs } from '~/lib/posts-api';
import parseMarkdown from '~/utils/parseMarkdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PageTitle } from '~/components/layout/typography';

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

const Post = ({ post }) => {
  const router = useRouter();
  return (
    <>
      <h1>Slug: {router.query.post}</h1>
      <PageTitle>{post.title}</PageTitle>
      <article>
        <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
      </article>
    </>
  );
};

export default Post;
