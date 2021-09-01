import { Flex, Heading } from "@chakra-ui/react";

interface ContinentBanner {
  banner: string;
  name: string;
}

export function ContinentBanner({ banner, name }: ContinentBanner){
  return (
    <Flex
      w="100%"
      h={["150px","300px","500px"]}
      px={["0","0","36"]}
      pt={["0","0","72"]}
      bgImage={`url('${banner}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center","center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem","3rem"]}
        color="gray.50"
        fontWeight="600"
      >
        {name}
      </Heading>
    </Flex>
  )
}