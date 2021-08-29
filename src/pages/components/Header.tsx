import { Center, Image, useBreakpointValue } from "@chakra-ui/react";

export function Header(){

  return (
    <Center>
      <Image mt={[15, 27]} mb={[15, 27]} w={["81px","184px"]} src='/images/logo.svg' />
    </Center>
  )
}