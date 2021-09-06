import { Box, Flex, Text, Image } from "@chakra-ui/react";
import ReactCountryFlag from 'react-country-flag'

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
      <Flex p="24px" justify="space-between" border="1px" borderColor="yellow.300" borderTop="0">
        <Flex direction="column">
          <Text fontSize="20px" color="gray.700" fontWeight="600">{name}</Text>
          <Text fontSize="16px" color="gray.300" fontWeight="500">{country}</Text>
        </Flex>
        <Flex
          mt="8px"
        >
          <ReactCountryFlag
            style={{
              fontSize: '2em',
              lineHeight: '2em',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
            countryCode={flag}
            svg 
          />
        </Flex>
      </Flex>
    </Box>
  )
}