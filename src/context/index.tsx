import React, { useEffect, useState } from 'react';
import { Locales } from '~/locales';
import LocaleContext from './locale.context';
import CategoryContext from './category.context';

const ContextProvider = ({ children }) => {
  // TODO add categories context
  const [locale, setLocale] = useState(Locales.Portuguese);
  const [category, setCategory] = useState('');

  const toggleLocale = () =>
    setLocale(locale === Locales.Portuguese ? Locales.English : Locales.Portuguese);

  const selectCategory = (categoryArray) => {
    setCategory(categoryArray);
  };

  useEffect(() => {
    toggleLocale();
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      <CategoryContext.Provider value={{ category, selectCategory }}>
        {children}
      </CategoryContext.Provider>
    </LocaleContext.Provider>
  );
};

export { LocaleContext, CategoryContext };
export default ContextProvider;
