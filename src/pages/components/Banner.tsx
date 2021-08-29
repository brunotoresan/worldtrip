import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react"

export function Banner(){

  return (
    <Flex 
      w='100%' 
      h={['163px', '250px', '250px', '368px']} 
      bgImage="url('/images/nightSky.jpg')"
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex justify={['center', 'space-between']} align='center' w='100%' mx='auto' px={["4","10","15","20","36"]}>
        <Box>
          <Heading color="gray.50" fontWeight="500" fontSize={["xl", "2xl", "2xl", "4xl"]}>
            5 Continentes,<br/>infinitas possibilidades.
          </Heading>
          <Text
            mt={["1rem", "1.25rem"]}
            fontWeight="400"
            fontSize={["0.875rem", "1.25rem"]}
            maxW={["100%", "100%", "100%", "550px"]}
            color="gray.200"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>
        <Image
          src='/images/airplane.svg'
          w={["300px","300px","300px","430px"]}
          display={['none', 'none', 'block']}
          transform='translateY(4rem)'
        />
      </Flex>

    </Flex>
  )
}