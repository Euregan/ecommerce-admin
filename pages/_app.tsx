import type { AppProps } from 'next/app'
import '../libs/theme.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
