import React, { useEffect, useState } from 'react'
import LocaleContext from './locale.context'

const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt-BR')
  const toggleLanguage = () => setLanguage(language === 'pt-BR' ? 'eng' : 'pt-BR')

  useEffect(() => {
    setLanguage(window.navigator.language === 'pt-BR' ? 'pt-BR' : 'eng')
  }, [])

  return (
    <LocaleContext.Provider value={{ language, toggleLanguage }}>{children}</LocaleContext.Provider>
  )
}

export { LocaleContext }
export default ContextProvider
