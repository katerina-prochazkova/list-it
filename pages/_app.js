import { Menu } from '../components/Menu';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Head>
        <title>List it! - Sdílené seznamy</title>
      </Head>
      <Menu />
      <Component {...pageProps} />
      <footer>KPKP 2020</footer>
    </div>
  )
}

export default MyApp
