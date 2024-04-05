import '@/styles/globals.css'
import Navbar from '@/components/Navbar' // Adjust the path as necessary
import Footer from '@/components/Footer' // Adjust the path as necessary

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
