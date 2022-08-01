import Head from 'next/head'
import '../styles/globals.css'
import { container, main } from '../styles//Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={main}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp