import { Box, Text, Center, Image } from '@chakra-ui/react'

interface TravelTypeProps {
  imageSrc: string
  type: string
}

export function TravelTypeImage({imageSrc, type}: TravelTypeProps){
  return (
    <Box>
      <Center>
        <Image src={imageSrc} />
      </Center>
      <Text fontWeight="600" fontSize="24px" lineHeight="36px" color="gray.700">
        {type}
      </Text>
    </Box>
  )
}