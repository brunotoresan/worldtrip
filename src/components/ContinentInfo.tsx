import { ContinentWithCities } from '../pages/continent/[slug]'
import { SimpleGrid, Box, Text, Flex } from '@chakra-ui/react'
import { ContinentStatistic } from './ContinentStatistic'

interface ContinentProps {
  continent: ContinentWithCities
}

export function ContinentInfo({continent}: ContinentProps){

  return (
    <SimpleGrid 
      templateColumns={["1fr","1fr","1fr 1fr", "1fr 1fr"]} 
      gap={[5, 10, 16, 20]} 
      maxW="1160px" 
      mx="auto"
    >
      <Box mt={["1.5rem", "5rem"]}>
        <Text
          fontSize={["lg", "xl", "xl", "2xl"]}
          textAlign="justify"
          mx={["16px","16px","16px", "16px", "0px"]} 
        >
          {continent.description}
        </Text>
      </Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW={[null, null, null, "500px"]}
        mx={["16px", "16px", "16px", "0px"]}
      >
        <ContinentStatistic 
          statNumber={continent.countries} 
          statName="países" 
        />
        <ContinentStatistic 
          statNumber={continent.languages} 
          statName="línguas" 
        />
        <ContinentStatistic 
          statNumber={continent.citiesPlus100} 
          statName="cidades +100" 
        />
      </Flex>
    </SimpleGrid>
  )
}