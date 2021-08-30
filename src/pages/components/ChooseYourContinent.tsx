import { Box, Text } from "@chakra-ui/react"

export function ChooseYourContinent(){
  return (
    <>
      <Box w={["60px", "90px"]} mt={["36px", "80px"]} mb={["24px", "52px"]} mx="auto" border="1px solid #47585B"/>
      <Box 
        textAlign="center" 
        mb={["20px", "52px"]}
        fontSize={["1.25rem", "2.25rem"]}
        fontWeight="500"
        color="gray.700"
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Box>
    </>
  )
}