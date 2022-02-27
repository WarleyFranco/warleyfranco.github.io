import React from 'react';
import { getAllCategories, getAllPostsByLocale } from '~/lib/posts-api';
import { useContext } from 'react';
import PostList from '~/components/post/post-list';
import { CategoryContext } from '~/context';
import { PageTitle } from '~/components/layout/typography';
import CategoryTagList from '~/components/post/post-categories';

export async function getStaticProps({ locale }) {
  return {
    props: { posts: [...getAllPostsByLocale(locale)], categories: [...getAllCategories()], locale },
  };
}

const AllPosts = ({ posts, categories }): JSX.Element => {
  let currentCategory = '#all';
  const { category } = useContext(CategoryContext);

  if (category) {
    currentCategory = `#${category}`;
  }

  return (
    <>
      <PageTitle>
        <span className="text-pink-600">{currentCategory}</span> posts
      </PageTitle>
      <CategoryTagList categories={categories} />
      <PostList posts={posts} />
    </>
  );
};

export default AllPosts;
