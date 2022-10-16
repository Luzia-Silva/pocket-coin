import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../utils/gtag'
import Navbar from '../Components/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const queryClient = new QueryClient()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Navbar />
         <ToastContainer />
        <Component {...pageProps}/>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
