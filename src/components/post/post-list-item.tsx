import React from 'react';
import { PostTitle } from '~/components/layout/typography';
import formatDate from '~/utils/formatDate';
import { Post } from '~/types/post';
import { useTranslation } from '~/hooks';
import CategoryTags from '~/components/post/category-tags';

type PostListItemProps = {
  post: Post;
};

const PostListItem = ({ post }: PostListItemProps) => {
  const { locale } = useTranslation();
  const created = formatDate(post.created, locale);

  return (
    <article className="p-4 flex flex-col flex-grow-0 flex-shrink-0 w-full border-b-2 last:border-b-0 border-gray-100 dark:border-gray-700 dark:border-opacity-50 my-4">
      <>
        <header>
          <PostTitle postLink={`/posts/${post.slug}`} locale={locale}>
            {post.title}
          </PostTitle>
          <p className="text-gray-700 dark:text-gray-300 font-light text-base">{created}</p>
        </header>
        <p className="py-1 text-gray-700 dark:text-gray-300">{post.description}</p>
        <div className="inline-flex">
          <CategoryTags categories={post.categories} />
        </div>
      </>
    </article>
  );
};

export default PostListItem;
