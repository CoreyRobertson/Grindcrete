import '@/styles/globals.css'
import Navbar from '@/components/Navbar' // Adjust the path as necessary
import Footer from '@/components/Footer' // Adjust the path as necessary
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as gtag from '../lib/gtag'; // Adjust the path as necessary

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ES8GXE4CXC"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ES8GXE4CXC');
        `}} />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
        <Analytics />
      </main>
      <Footer />
    </>
  );
}
