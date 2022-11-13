import React, { useContext } from 'react';
import { CategoryContext } from '~/context';

type CategoryTagProps = {
  categories: string[];
  isCategoryNav?: boolean
};

const CategoryTags = ({ categories, isCategoryNav = false }: CategoryTagProps) => {
  const { category: currentCategory, selectCategory } = useContext(CategoryContext);
  return (
    <>
      {categories.map((category) => {
        const isAllCategorySelected = isCategoryNav ? false : currentCategory === 'all';
        const isCurrentCategory = isAllCategorySelected || category === currentCategory;
        return (
          <span
            onClick={() => selectCategory(category)}
            key={`${category}`}
            className={`${isCurrentCategory ? 'text-white bg-accent' : 'text-gray-700 dark:text-gray-700 bg-gray-300'} cursor-pointer mx-2 my-1 first:ml-0 rounded-full  px-3`}
          >
          {category}
        </span>
        );
      })}
    </>
  );
}

export default CategoryTags;

