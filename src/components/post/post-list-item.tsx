import React, { useContext } from 'react';
import { PostTitle } from '~/components/layout/typography';
import formatDate from '~/utils/formatDate';
import { Post } from '~/types/post';
import { CategoryContext } from '~/context';
import { useTranslation } from '~/hooks';

type CategoryTagProps = {
  categories: string[];
};

const CategoryTags = ({ categories }: CategoryTagProps) => {
  const { selectCategory } = useContext(CategoryContext);
  return (
    <>
      {categories.map((category) => (
        <span
          onClick={() => selectCategory(category)}
          key={`${category}`}
          className={`cursor-pointer mr-2`}
        >
          #{category}
        </span>
      ))}
    </>
  );
};

type PostListItemProps = {
  post: Post;
};

const PostListItem = ({ post }: PostListItemProps) => {
  const { locale } = useTranslation();
  const created = formatDate(post.created, locale);

  return (
    <article className="bg-white rounded-md p-4 flex flex-col flex-none w-full shadow my-4">
      <>
        <header>
          <PostTitle postLink={`/posts/${post.slug}`} locale={locale}>
            {post.title}
          </PostTitle>
          <p className="text-gray-700 font-light text-base">{created}</p>
        </header>
        <p className="py-1">{post.description}</p>
        <div className="inline-flex">
          <CategoryTags categories={post.categories} />
        </div>
      </>
    </article>
  );
};

export default PostListItem;
