import { Swiper, SwiperSlide  } from "swiper/react";
import SwiperCore, { Pagination,Navigation } from 'swiper';
import { Slide } from './Slide'
import { Flex } from "@chakra-ui/react";
import { useContinents } from '../../hooks/useContinents'

SwiperCore.use([Pagination,Navigation]);

export default function ContinentCarousel() {

  const { continents } = useContinents()

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
          {continents.map(continent => (
            <SwiperSlide>
              <Slide
                key={continent.slug}
                continentImage={continent.sliderImage}
                continentName={continent.name}
                continentSlogan={continent.slogan} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </>
  )
}