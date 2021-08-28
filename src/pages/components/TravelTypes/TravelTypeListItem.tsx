import { Text, Flex } from '@chakra-ui/react'
import { ListItem, ListIcon } from "@chakra-ui/react"
import { VscCircleFilled } from "react-icons/vsc"

interface TravelTypeListItemProps {
  itemName: string
}

export function TravelTypeListItem({ itemName}: TravelTypeListItemProps){
  return (
    <ListItem display="flex" direction="row">
      <ListIcon mt="1" as={VscCircleFilled} color="yellow.500" />
      <Text fontWeight="500" color="gray.700" fontSize="1.125rem">{itemName}</Text>
    </ListItem>
  )
}