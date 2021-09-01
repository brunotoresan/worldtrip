import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/ContinentBanner";
import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../services/api";

interface City {
  image: string,
  name: string,
  country: string,
  flag: string
}

interface ContinentWithCities {
  slug: string,
  name: string,
  banner: string,
  description: string,
  countries: number,
  languages: number,
  citiesPlus100: number,
  cities: City[]
}

interface ContinentProps {
  continent: ContinentWithCities
}

export default function Continent({continent}: ContinentProps){

  return (
    <>
      <Header />
      <ContinentBanner banner={continent.banner} name={continent.name}/>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { slug } = params
  const response = await api.get(`/continentsWithCities?slug=${slug}`)
  const continent: ContinentWithCities = response.data[0]

  return {
    props: {
      continent
    }
  }
}