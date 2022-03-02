import React from 'react';
import { getPostBySlug, slugWithoutExtension, getSlugs } from '~/lib/posts-api';
import markdownToHtml from '~/utils/markdownToHtml';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PageTitle } from '~/components/layout/typography';
import formatDate from '../../utils/formatDate';
import { useTranslation } from '~/hooks';

// TODO: Create single default post layout
type PostPageStaticProps = {
  params: {
    post: string;
  };
  locale: string | undefined;
};

export const getStaticProps: GetStaticProps = async ({ params, locale }: PostPageStaticProps) => {
  return {
    props: {
      post: { ...getPostBySlug(params.post[0], locale) },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const allPaths = locales
    .map((locale) => {
      const paths = [];

      // Create URL paths based on the locale and post translation;
      getSlugs().forEach((slug) => {
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
  const { locale } = useTranslation();
  const created = formatDate(post.created, locale);

  return (
    <div className="flex justify-center">
      <article className="flex flex-col justify-self-center max-w-4xl">
        <header className="py-12">
          <p className="mb-2">{created}</p>
          <PageTitle>
            {post.title}
          </PageTitle>
          <h2 className="text-3xl my-4 font-light">{post.description}</h2>
        </header>
        <div
          className="max-w-full prose prose-xl prose-pink dark:prose-invert pb-10"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) as string }}
        />
      </article>
    </div>
  );
};

export default Post;
