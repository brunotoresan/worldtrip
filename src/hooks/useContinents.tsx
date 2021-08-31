import { createContext, useEffect, useState, ReactNode, useContext } from "react"
import api from '../services/api'

interface Continent {
  slug: string,
  image: string,
  name: string,
  slogan: string
}

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

interface ContinentProviderProps {
  // accepts all valid React data (e.g. jsx, html, text,...)
  // this enables the component ContinentProvider to have children elements
  children: ReactNode
}

interface ContinentContextData {
  continents: Continent[],
  continentsWithCities: ContinentWithCities[]
}

// The provider property will make the context available for other components 
const ContinentsContext = createContext<ContinentContextData>(
  {} as ContinentContextData
)

export function ContinentsProvider({ children }: ContinentProviderProps){
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() =>  {
    async function loadContinents() {
      let response = await api.get<Continent[]>('/continents')
                              .then(response => response.data)
      setContinents(response)
    }

    loadContinents();
    }, []);

    const [continentsWithCities, setContinentsWithCities] = useState<ContinentWithCities[]>([])

    useEffect(() =>  {
      async function loadContinentsWithCities() {
        let response = await api.get<ContinentWithCities[]>('/continentsWithCities')
                                .then(response => response.data)
        setContinentsWithCities(response)
    }

    loadContinentsWithCities();
    }, []);

  return (
    <ContinentsContext.Provider 
      value={{ continents, continentsWithCities }}
    >
      {children}
    </ContinentsContext.Provider>
  )
}

export function useContinents() {
  const context = useContext(ContinentsContext)
  return context
}
