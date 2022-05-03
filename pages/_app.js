import Header from '../components/Header';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="content overflow-x-hidden"><Component {...pageProps} /></div>
    </>
  )
}

export default MyApp
