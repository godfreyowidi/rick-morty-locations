import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../api/rick-morty-api';
import Head from 'next/head';
import MainBackground from '../components/MainBackground';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rick and Morty Locations</title>
      </Head>
      <ApolloProvider client={client}>
        <MainBackground />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
