import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { TravelType } from './TravelType';

export function TravelTypes(){
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["2.25rem","7.125rem"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      <GridItem>
        <TravelType icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TravelType icon="beach" text="praia" />
      </GridItem>
      <GridItem>
        <TravelType icon="modern" text="moderno" />
      </GridItem>
      <GridItem>
        <TravelType icon="classic" text="clássico" />
      </GridItem>
      <GridItem>
        <TravelType icon="earth" text="e mais..." />
      </GridItem>                        
    </Grid>
  )
}