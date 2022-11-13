import React from 'react';
import { getAllCategories, getAllPostsByLocale } from '~/lib/posts-api';
import { useContext } from 'react';
import PostList from '~/components/post/post-list';
import { CategoryContext } from '~/context';
import { PageTitle } from '~/components/layout/typography';
import CategoryTagList from '~/components/post/post-categories';

export async function getStaticProps({ locale }) {
  return {
    props: { posts: [...getAllPostsByLocale(locale)], categories: [...getAllCategories(locale)], locale },
  };
}

const AllPosts = ({ posts, categories }): JSX.Element => {
  const { category } = useContext(CategoryContext);

  return (
    <main className="flex flex-col flex-grow">
      <header className="py-6">
        <PageTitle center>
          <><span className="text-accent">#{category}</span> posts</>
        </PageTitle>
      </header>
      <div className="flex flex-col flex-grow">
        <CategoryTagList categories={categories} />
        <PostList posts={posts} />
      </div>
    </main>
  );
};

export default AllPosts;
