import React from 'react';
import Head from 'next/head';
import { Layout } from '~/components/layout';
import ContextProvider from '~/context/';
import '~/styles/global.scss';
import Script from 'next/script';

function MainApplication({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-J4L30DZK4K" />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-J4L30DZK4K');
        `}
      </Script>
      <Head>
        <title>Warley Franco - Blog</title>
      </Head>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  );
}

export default MainApplication;
