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
      bg: 'gray.50',
      ".swiper-button-next, .swiper-button-prev": { 
        color: 'yellow.500'
      },
      ".swiper-button-next::after, .swiper-button-prev::after": { 
        color: 'yellow.500'
      },
      ".swiper-pagination-bullet": {
        background: 'gray.300',
        width: '1rem',
        height: '1rem'
      },          
      ".swiper-pagination-bullet-active": {
        background: 'yellow.500',
        width: '1rem',
        height: '1rem'
      },
      ".swiper-slide img": {
        display: "block",
        width: "100%",
        height: "100%",
        fit: "cover"
      }
    },
  }
})