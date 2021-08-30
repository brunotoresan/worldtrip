import { Flex, Image, Icon, Grid, Center } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header(){
  const { asPath } = useRouter()
  const shouldHaveReturnArrow = asPath !== '/'

  return (
    <Center as="header" mt={[15, 27]} mb={[15, 27]}>
      <Grid
        w="100%"
        maxW='1240px'
        mx="auto"
        templateColumns="repeat(3, 1fr)"
      >
        { shouldHaveReturnArrow && 
          <Link href='/' passHref>
            <Icon as={RiArrowLeftSLine} fontSize={[20,40]} ml={["1rem", "0rem"]} cursor="pointer" justifySelf="start" />
          </Link>
        }
        <Image w={["81px","184px"]} src='/images/logo.svg' justifySelf="center" />
      </Grid>
    </Center>
  )
}

