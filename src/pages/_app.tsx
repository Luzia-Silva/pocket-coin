import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from '../styles/theme'
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }: AppProps) {
  
  ReactGA.initialize('G-9G079J9GM7');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;