import React from 'react';
import CategoryTags from '~/components/post/category-tags';

type CategoryTagListProps = {
  categories: string[];
};

const CategoryTagList = (props: CategoryTagListProps) => {
  return (
    <>
      <div className="flex justify-center text-center border-t border-b bg-white">
        <CategoryTags {...props} isCategoryNav={true}/>
      </div>
    </>
  );
};

export default CategoryTagList;
