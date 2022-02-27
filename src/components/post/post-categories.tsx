import React, { useContext } from 'react';
import styles from './post-list.module.scss';
import { CategoryContext } from '~/context';

type CategoryTagListProps = {
  categories: string[];
};

const CategoryTagList = ({ categories }: CategoryTagListProps) => {
  const { selectCategory } = useContext(CategoryContext);
  return (
    <>
      <div className="flex flex-grow justify-center text-center border-t shadow">
        {categories.map((category) => (
          <span
            onClick={() => selectCategory(category)}
            key={`${category}`}
            className={`${styles[category]} ${styles.categoryTag}`}
          >
            #{category}
          </span>
        ))}
      </div>
    </>
  );
};

export default CategoryTagList;
