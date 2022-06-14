// グローバルスタイルの読み込み
import '../styles/reset.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
