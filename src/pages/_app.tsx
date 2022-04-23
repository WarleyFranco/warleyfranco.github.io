import React from 'react';
import Head from 'next/head';
import { Layout } from '~/components/layout';
import ContextProvider from '~/context/';
import '~/styles/global.scss';

function MainApplication({ Component, pageProps }) {
  return (
    <>
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
