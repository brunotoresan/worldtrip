import { ContinentWithCities } from '../pages/continent/[slug]'
import { SimpleGrid, Box, Text } from '@chakra-ui/react'
import { ContinentStatistic } from './ContinentStatistic'

interface ContinentProps {
  continent: ContinentWithCities
}

export function ContinentInfo({continent}: ContinentProps){

  return (
    <SimpleGrid flex="1" gap="1" minChildWidth="320px" align="flex-start">
      <Box>
        <Text
          maxW={["343px", "600px"]}
          fontSize={['0.875rem', '1.5rem']}
          align="justify"
          mx="auto"
        >
          {continent.description}
        </Text>
      </Box>
      <SimpleGrid
        templateColumns={["1fr 1fr 1fr"]}
        maxW="500px"
        gap={"42px"}
        mx="auto"
      >
        <ContinentStatistic statNumber={continent.countries} statName="países" />
        <ContinentStatistic statNumber={continent.languages} statName="línguas" />
        <ContinentStatistic statNumber={continent.citiesPlus100} statName="cidades +100" />
      </SimpleGrid>
    </SimpleGrid>
  )
}