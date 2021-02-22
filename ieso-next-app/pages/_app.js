import { Provider } from 'next-auth/client'
import '../styles/styles.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import 'typeface-abril-fatface'
import 'typeface-work-sans'
import 'typeface-spectral'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
// import '@fortawesome/fontawesome-free/js/brands';

function MyApp({ Component, pageProps }) {
  return <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
