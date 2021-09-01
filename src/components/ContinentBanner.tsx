import { Flex, Heading } from "@chakra-ui/react";

interface ContinentBanner {
  banner: string;
  name: string;
}

export function ContinentBanner({ banner, name }: ContinentBanner){
  return (
    <Flex
      // w="100%"
      // h={['150px', '500px']}
      // bgImage={`url('${banner}')`}
      // bgRepeat="no-repeat"
      // bgPosition="center"
      w='100%' 
      h={['150px', '500px']}
      bgImage={`url('${banner}')`}
      bgPosition={["50% 50%","50% 50%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Heading>
        {name}
      </Heading>
    </Flex>
  )
}