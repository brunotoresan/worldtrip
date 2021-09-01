import { Header } from "../../components/Header";
import { useRouter } from "next/dist/client/router";
import { useContinents } from "../../hooks/useContinents";
import { ContinentBanner } from "../../components/ContinentBanner";

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

export default function Continent(){

  const { asPath } = useRouter()
  const { continentsWithCities } = useContinents()
  const continent = continentsWithCities.filter(continent => asPath.endsWith(continent.slug))[0]

  console.log(asPath) // error because asPath becomes /continent/[slug]
  console.log(continentsWithCities)

  return (
    <>
      <Header />
      <ContinentBanner banner={continent.banner} name={continent.name}/>
    </>
  )
}