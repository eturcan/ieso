import { Provider } from 'next-auth/client'
import '../styles/styles.css'
import 'typeface-abril-fatface'
import 'typeface-work-sans'
import 'typeface-spectral'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
// import '@fortawesome/fontawesome-free/js/brands';

function MyApp({ Component, pageProps }) {
  return <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
