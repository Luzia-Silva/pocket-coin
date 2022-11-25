import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../Components/Navbar'
import { AuthProvider } from '../Context/AuthContext'
import { theme } from '../styles/theme'
import * as gtag from '../utils/gtag'
const queryClient = new QueryClient()


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

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
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Navbar />
          <ToastContainer />
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </AuthProvider>

  )
}

export default MyApp
