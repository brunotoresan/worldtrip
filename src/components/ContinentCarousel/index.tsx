import { Swiper, SwiperSlide  } from "swiper/react";
import SwiperCore, { Pagination,Navigation } from 'swiper';
import { Slide } from './Slide'
import { Flex } from "@chakra-ui/react";

SwiperCore.use([Pagination,Navigation]);

export default function ContinentCarousel() {
  return (
    <>
      <Flex w='100%' h={['250px', '450px']} maxW='1240px' mx='auto' mb={["1.5rem", "2.5rem"]}>
        <Swiper 
          slidesPerView={1}
          loop={true} 
          pagination={{"clickable": true}}
          navigation={true}
          autoplay={{delay:4000}}
          style={{
            width: '100%',
            flex: '1'
          }}
        >
          <SwiperSlide>América do Norte</SwiperSlide>
          <SwiperSlide>América do Sul</SwiperSlide>
          <SwiperSlide>Ásia</SwiperSlide>
          <SwiperSlide>África</SwiperSlide>
          <SwiperSlide>
            <Slide 
              continentImage="/images/continents/europe/europe.png"
              continentName="Europa"
              continentSlogan="O continente mais antigo." 
            />
          </SwiperSlide>
          <SwiperSlide>Oceania</SwiperSlide>
        </Swiper>
      </Flex>
    </>
  )
}