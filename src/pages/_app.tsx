import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Layout } from '../components/layout'
import LocaleContext from '../context/locale.context'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  // TODO: Refactor all these contexts to a context folder with a index file
  const [language, setLanguage] = useState('pt-BR')
  const toggleLanguage = () => setLanguage(language === 'pt-BR' ? 'eng' : 'pt-BR')

  useEffect(() => {
    setLanguage(window.navigator.language === 'pt-BR' ? 'pt-BR' : 'eng')
  }, [])

  return (
    <>
      <Head>
        <title>Warley Franco</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LocaleContext.Provider value={{ language, toggleLanguage }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocaleContext.Provider>
    </>
  )
}

export default MyApp
