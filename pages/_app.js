import { MainAppLayout } from '../src/components/Layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <MainAppLayout>
    <Component {...pageProps} />
  </MainAppLayout>
}

export default MyApp
