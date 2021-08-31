import { Header } from "../../components/Header";
import { useRouter } from "next/dist/client/router";
import { useContinents } from '../../hooks/useContinents'

interface City {
  image: string,
  name: string,
  country: string,
  flag: string
}

interface Continent {
  slug: string,
  sliderImage: string,
  name: string,
  slogan: string,
  banner: string,
  countries: number,
  languages: number,
  citiesPlus100: number,
  cities: City[]
}

export default function Continent(){

  const { asPath } = useRouter()
  const { continents } = useContinents()
  console.log(continents)
  // const continent = continents.filter(continent => continent.slug === asPath)

  return (
    <Header />
  )
}