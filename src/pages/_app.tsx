import React from 'react'
import Head from 'next/head'
import { Layout } from '~/components/layout'
import ContextProvider from '~/context/'
import '~/styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Warley Franco</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  )
}

export default MyApp
