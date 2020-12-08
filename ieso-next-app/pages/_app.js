import { Provider } from 'next-auth/client'
import '../styles/styles.css'
import 'typeface-abril-fatface'
import 'typeface-work-sans'
import 'typeface-spectral'
import '@fortawesome/fontawesome-free/css/all.css'

function MyApp({ Component, pageProps }) {
  return <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
