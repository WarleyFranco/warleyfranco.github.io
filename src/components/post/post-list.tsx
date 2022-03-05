import React, { useContext } from 'react';
import PostListItem from './post-list-item';
import { CategoryContext } from '~/context';

const PostList = ({ posts }) => {
  const { category } = useContext(CategoryContext);
  const filterPostsByCategory = (post) =>
    category !== 'all' ? post.categories.includes(category) : true;

  return (
    <section className="flex flex-wrap justify-start p-4 max-w-4xl mx-auto bg-white">
      {posts.filter(filterPostsByCategory).map((post) => (
        <PostListItem post={post} key={post.title} />
      ))}
    </section>
  );
};

export default PostList;
