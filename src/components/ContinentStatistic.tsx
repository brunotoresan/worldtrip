import { Flex, Text } from "@chakra-ui/react"

interface ContentStatisticProps {
  statNumber: number
  statName: string
}

export function ContinentStatistic({statNumber, statName}: ContentStatisticProps){
  return (
    <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
      <Text fontWeight="600" color="yellow.500" fontSize={["2xl","5xl"]}>{statNumber}</Text>
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl"]}>{statName}</Text>
    </Flex>
  )
}