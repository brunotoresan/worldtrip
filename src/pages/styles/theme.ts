import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '700': '#47585B',
      '300': '#999999',
      '200': '#DADADA',
      '50': '#F5F8FA'
    },
    yellow: {
      '500': '#FFBA08'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      bg: 'gray.50'
    }
  }
})