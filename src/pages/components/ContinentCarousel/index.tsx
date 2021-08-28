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
import { Slide } from './Slide'

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function ContinentCarousel() {
  return (
    <>
      <Swiper 
        slidesPerView={1}
        spaceBetween={30} 
        loop={true} 
        pagination={{"clickable": true}}
        navigation={true}
        style={{
          textAlign: "center",
          height: "28.125rem",
          width: "77.5rem",
          marginBottom: "4rem"
        }}
      >
        <SwiperSlide>América do Norte</SwiperSlide>
        <SwiperSlide>América do Sul</SwiperSlide>
        <SwiperSlide>Ásia</SwiperSlide>
        <SwiperSlide>África</SwiperSlide>
        <SwiperSlide>
          <Slide 
            continentImage="/images/continents/europe.png"
            continentName="Europa"
            continentSlogan="O continente mais antigo." 
          />
        </SwiperSlide>
        <SwiperSlide>Oceania</SwiperSlide>
      </Swiper>
    </>
  )
}