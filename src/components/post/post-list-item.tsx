import React, { useContext } from 'react';
import { PostTitle } from '~/components/layout/typography';
import styles from './post-list.module.scss';
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
          className={`${styles[category]} ${styles.categoryTag}`}
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
    <article className={styles.article}>
      <>
        <header>
          <PostTitle postLink={`/posts/${post.slug}`} locale={locale}>
            {post.title}
          </PostTitle>
          <p className={styles.date}>{created}</p>
        </header>
        <p className={styles.description}>{post.description}</p>
        <div className={styles.categories}>
          <CategoryTags categories={post.categories} />
        </div>
      </>
    </article>
  );
};

export default PostListItem;
