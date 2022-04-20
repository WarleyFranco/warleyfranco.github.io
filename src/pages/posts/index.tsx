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
  const { category } = useContext(CategoryContext);

  return (
    <main className="flex-grow bg-red">
      <header className={`py-10`}>
        <PageTitle center>
          <p><span className="text-pink-600">#{category}</span> posts | POSTS/INDEX.TS</p>
        </PageTitle>
      </header>
      <CategoryTagList categories={categories} />
      <PostList posts={posts} />
    </main>
  );
};

export default AllPosts;
