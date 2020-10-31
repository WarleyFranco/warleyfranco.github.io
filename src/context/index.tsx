import React, { useEffect, useState } from 'react'
import LocaleContext from '~/context/locale.context'
import CategoryContext from './CategoryContext'

const ContextProvider = ({ children }) => {
  // TODO add categories context
  const [language, setLanguage] = useState('pt-BR')
  const [category, setCategory] = useState('')
  const toggleLanguage = () => setLanguage(language === 'pt-BR' ? 'eng' : 'pt-BR')
  const selectCategory = (categoryArray) => {
    setCategory(categoryArray)
  }

  useEffect(() => {
    setLanguage(window.navigator.language === 'pt-BR' ? 'pt-BR' : 'eng')
  }, [])

  return (
    <LocaleContext.Provider value={{ language, toggleLanguage }}>
      <CategoryContext.Provider value={{ category, selectCategory }}>
        {children}
      </CategoryContext.Provider>
    </LocaleContext.Provider>
  )
}

export { LocaleContext, CategoryContext }
export default ContextProvider
