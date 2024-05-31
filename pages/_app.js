import '@/styles/globals.css'
import Navbar from '@/components/Navbar' // Adjust the path as necessary
import Footer from '@/components/Footer' // Adjust the path as necessary
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
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
      <Navbar />
      <main>
        <Component {...pageProps} />
        <Analytics />
      </main>
      <Footer />
    </>
  );
}
