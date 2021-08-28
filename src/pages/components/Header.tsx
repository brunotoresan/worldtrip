import { Center, Image, useBreakpointValue } from "@chakra-ui/react";

export function Header(){

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const logoImage = isWideVersion ? '/images/logo/lg.png' : '/images/logo/base.png'

  return (
    <Center>
      <Image mt={[15, 27]} mb={[15, 27]} src={logoImage} />
    </Center>
  )
}