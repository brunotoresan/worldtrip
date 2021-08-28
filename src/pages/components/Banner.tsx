import { Box, Flex, Image, Text, extendTheme, useBreakpointValue } from "@chakra-ui/react"

export function Banner(){

  const isWideVersion = useBreakpointValue({
    sm: false,
    md: false,
    lg: false,
    xl: true
  })

  const shouldHaveAirplaine = useBreakpointValue({
    sm: false,
    md: false,
    lg: false,
    xl: true
  })

  const logoImage = isWideVersion ? '/images/nightSky/lg.png' : '/images/nightSky/base.png'

  return (
    <Flex position="relative" justifyContent="center">
      <Image width="100%" display="block" src={logoImage} fit="contain"/>
      <Box
        fontWeight="500"
        fontSize={["1.25rem", "1.75rem", null, "2rem"]}
        position="absolute" 
        top="0" 
        left="0"
        mt={["1.5rem", "1.5rem", "2rem", "2rem", "5rem", "8rem"]}
        ml={["0.75rem", "1.5rem", "1.75rem", "1.75rem", "8.75rem", "18rem"]}   
      >
        <Text color="gray.50">
          5 Continentes,<br/>infinitas possibilidades.
        </Text>
        <Text
          mt={["1rem", null, null, "1.25rem"]}
          fontWeight="400"
          fontSize={["0.875rem", "1.25rem"]}
          color="gray.200"
        >
          Chegou a hora de tirar do papel a viagem que você {isWideVersion && <br/>} sempre sonhou. 
        </Text>
      </Box>

      { shouldHaveAirplaine && 
        <Image
          src='/images/airplane.png'
          position="absolute" 
          top="0" 
          right="0"
          transform={[null, null, null, null, "translate(-30%, 30%)", "translate(-70%, 70%)"]}
        />
      }
    </Flex>
  )
}