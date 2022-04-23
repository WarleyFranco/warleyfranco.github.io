import { PageTitle } from '~/components/layout/typography';
import React from 'react';
import { useTranslation } from '~/hooks';
import PostList from '~/components/post/post-list';
import { getRandomPosts } from '~/lib/posts-api';

export async function getStaticProps({ locale }) {
  return {
    props: { posts: [...getRandomPosts(locale)] },
  };
}

export default function Custom404({ posts }): JSX.Element {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col flex-grow p-10">
      <PageTitle center>{t('pageNotFound')}</PageTitle>
      <h2 className="text-gray-700 text-3xl text-center mt-20 mb-10">{t('checkThese')}</h2>
      <div className="flex flex-col flex-grow">
        <PostList posts={posts} />
      </div>
    </main>
  );
}
