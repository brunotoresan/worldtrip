import { HStack, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { TravelTypeImage } from './TravelTypeImage'
import { List } from "@chakra-ui/react"
import { TravelTypeListItem } from './TravelTypeListItem'

export function TravelTypes(){

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      { isWideVersion && (
        <>
          <HStack mt="7.125rem" ml="8.75rem" mr="8.75rem" justify="space-evenly">
            <TravelTypeImage imageSrc='/images/travelTypes/cocktail.png' type='vida noturna' />
            <TravelTypeImage imageSrc='/images/travelTypes/surf.png' type='praia' />
            <TravelTypeImage imageSrc='/images/travelTypes/modern.png' type='moderno' />
            <TravelTypeImage imageSrc='/images/travelTypes/museum.png' type='clássico' />
            <TravelTypeImage imageSrc='/images/travelTypes/earth.png' type='e mais...' />             
          </HStack>
          <Box width="90px" mt="80px" mb="52px" mx="auto" border="2px solid #47585B"/>
        </>
      )}
      { !isWideVersion && (
        <>
          <List mt="2.25rem" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" flexGrow={1}>
            <Box display="flex" width="73%" flexDirection="row" justifyContent="space-between">
              <TravelTypeListItem itemName='vida noturna' />
              <TravelTypeListItem itemName='praia' />
            </Box>
            <Box mt="1.6875rem" display="flex" width="73%" flexDirection="row" justifyContent="space-between">
              <TravelTypeListItem itemName='moderno' />
              <TravelTypeListItem itemName='clássico' />
            </Box>
            <Box mt="1.5rem" display="flex" flexDirection="row" flexGrow={2}>
              <TravelTypeListItem itemName='e mais...' />
            </Box>
          </List>
          <Box width="60px" mt="36px" mb="24px" mx="auto" border="1px solid #47585B"/>
        </>
      )}
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