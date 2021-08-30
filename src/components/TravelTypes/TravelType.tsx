import { Image, Text, Flex, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
  icon: string
  text: string
}

export function TravelType({icon, text}: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    sm: true,
    base: false
  })

  return (
    <Flex direction={["row","column"]} align="center" justify="center">
      {isMobile ? 
        <Image src={`/images/travelTypes/${icon}.svg`} w="85px" h="85px" mb="6" /> :
        <Text color="yellow.500" fontSize="4xl" mr="2">•</Text>}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl","2xl"]}>{text}</Text>
    </Flex>
  )
}