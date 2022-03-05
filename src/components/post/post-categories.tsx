import React, { useContext } from 'react';
import { CategoryContext } from '~/context';

type CategoryTagListProps = {
  categories: string[];
};

const CategoryTagList = ({ categories }: CategoryTagListProps) => {
  const { selectCategory } = useContext(CategoryContext);
  const { category } = useContext(CategoryContext);
  return (
    <>
      <div className="flex flex-grow justify-center text-center border-t border-b bg-white">
        {categories.map((tag) => (
          <span
            onClick={() => selectCategory(tag)}
            key={`${tag}`}
            className={`${tag === category ? 'text-pink-600' : 'text-gray-700'} cursor-pointer mx-2 my-1`}
          >
            #{tag}
          </span>
        ))}
      </div>
    </>
  );
};

export default CategoryTagList;
