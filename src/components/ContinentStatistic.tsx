import { Flex, Text, Icon, Tooltip } from "@chakra-ui/react"
import { RiInformationLine } from "react-icons/ri";

interface ContentStatisticProps {
  statNumber: number
  statName: string
  cities?: string[]
}

export function ContinentStatistic({statNumber, statName, cities}: ContentStatisticProps){

  const tooltipCities = cities?.join(', ')

  return (
    <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
      <Text fontWeight="600" color="yellow.500" fontSize={["2xl","5xl"]}>{statNumber}</Text>
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl"]}>
        {statName}
        { cities &&               
          <Tooltip label={tooltipCities}>
            <span>
              <Icon 
                cursor="pointer" 
                as={RiInformationLine} 
                ml="1" 
                color="gray.300" 
                w={["10px","16px"]} 
                h={["10px","16px"]}
              />
            </span>
          </Tooltip> 
        }
      </Text>
    </Flex>
  )
}