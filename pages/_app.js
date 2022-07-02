import '../styles/globals.css'
import PageLayout from './components/pageLayout'

function MyApp({ Component, pageProps }) {
  return (
  <PageLayout>
    <Component {...pageProps} />
  </PageLayout> 
  )
}

export default MyApp
