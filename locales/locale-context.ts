import React from 'react'

const LocaleContext = React.createContext({
  language: 'pt-BR',
  toggleLanguage: () => {},
})

export default LocaleContext
