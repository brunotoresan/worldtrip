import { Flex, Grid, Heading } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

interface City {
  image: string,
  name: string,
  country: string,
  flag: string
}

interface ContinentWithCities {
  slug: string,
  name: string,
  banner: string,
  description: string,
  countries: number,
  languages: number,
  citiesPlus100: number,
  cities: City[]
}

interface ContinentProps {
  continent: ContinentWithCities
}

export function ContinentCities({continent}: ContinentProps){
  return (
    <Flex direction="column" maxW="1160px" mx="auto" mt={["33px", "80px"]} mb={["1rem", "2.25rem"]} px="1rem">
      <Heading color="gray.700" fontWeight="500" fontSize={["1.5rem", "2.25rem"]}>
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        maxW={["256px", "1160px"]}
        mx="auto"
      >
        { continent.cities.map(city => (
          <CityCard
            key={city.name}
            image={city.image}
            name={city.name}
            country={city.country}
            flag={city.flag}
          />
        ))}
      </Grid>
    </Flex>
  )
}