import React, { useState } from 'react';
import { LocaleContext, LocaleProvider } from './locale.context';
import CategoryContext from './category.context';

const ContextProvider = ({ children }) => {
  // TODO add categories context
  const [category, setCategory] = useState('');

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