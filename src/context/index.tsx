import React, { useState } from 'react';
import { LocaleContext, LocaleProvider } from './locale.context';
import CategoryContext from './category.context';

const ContextProvider = ({ children }) => {
  const [category, setCategory] = useState('all');

  const selectCategory = (categoryArray) => {
    setCategory(categoryArray);
  };

  return (
    <LocaleProvider>
      <CategoryContext.Provider value={{ category, selectCategory }}>
        {children}
      </CategoryContext.Provider>
    </LocaleProvider>
  );
};

export { LocaleContext, CategoryContext };
export default ContextProvider;
