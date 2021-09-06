import { Box, Flex, Image } from "@chakra-ui/react";

interface CityProps {
  image: string,
  name: string,
  country: string,
  flag: string
}

export function CityCard({image, name, country, flag}: CityProps){
  return (
    <Box borderRadius="6px" mt={["20px", "40px"]} overflow="hidden">
      <Image src={image} width="100%" height="173px" objectFit="cover" />
    </Box>
  )
}