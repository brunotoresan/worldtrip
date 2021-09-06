import { Text, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

interface SlideProps {
  continentImage: string
  continentSlug: string
  continentName: string
  continentSlogan: string
}

export function Slide({continentImage, continentSlug, continentName, continentSlogan}: SlideProps){
  return (
    <Link href={`/continent/${continentSlug.toLowerCase()}`}>
      <a>
        <Flex
          w='100%'
          h='100%'
          bgImage={`url(${continentImage})`}
          align='center'
          justify='center'
          direction='column'
          bgSize="cover"
          cursor="pointer"
        >
          <Heading color="gray.50" fontWeight="700" fontSize={["1.5rem", "3rem"]}>
            {continentName}
          </Heading>
          <Text mt={["0.75rem", "1rem"]} fontSize={["0.875rem", "1.5rem"]} fontWeight="700" color="gray.200">
            {continentSlogan}
          </Text>
        </Flex>
      </a>
    </Link>
  )
}