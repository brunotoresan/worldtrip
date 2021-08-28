import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

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
          color: "yellow.500"
        }}
      >
        <SwiperSlide>América do Norte</SwiperSlide>
        <SwiperSlide>América do Sul</SwiperSlide>
        <SwiperSlide>Ásia</SwiperSlide>
        <SwiperSlide>África</SwiperSlide>
        <SwiperSlide>Europa</SwiperSlide>
        <SwiperSlide>Oceania</SwiperSlide>
      </Swiper>
    </>
  )
}