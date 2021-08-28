import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

import { Text, Image, Flex, Box } from "@chakra-ui/react";


interface SlideProps {
  continentImage: string
  continentName: string
  continentSlogan: string
}

export function Slide({continentImage, continentName, continentSlogan}: SlideProps){
  return (
    <Flex position="relative">
      <Image src={continentImage}/>
      <Box position="absolute" left="50%" top="50%" transform="translate(-50%, -50%)">
        <Text color="gray.50" fontWeight="700" fontSize="3rem">
          {continentName}
        </Text>
        <Text mt="1rem" fontSize="1.5rem" fontWeight="700" color="gray.200">
          {continentSlogan}
        </Text>
      </Box>
    </Flex>
  )
}