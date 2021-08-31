import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/slider.scss';
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { ContinentsProvider } from '../hooks/useContinents';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsProvider>
        <Component {...pageProps} />
      </ContinentsProvider>
    </ChakraProvider>
  )
}

export default MyApp
