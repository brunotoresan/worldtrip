import { createContext, useEffect, useState, ReactNode, useContext } from "react"
import api from '../services/api'

interface Continent {
  slug: string,
  image: string,
  name: string,
  slogan: string
}

interface ContinentProviderProps {
  // accepts all valid React data (e.g. jsx, html, text,...)
  // this enables the component ContinentProvider to have children elements
  children: ReactNode
}

interface ContinentContextData {
  continents: Continent[]
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

  return (
    <ContinentsContext.Provider 
      value={{ continents }}
    >
      {children}
    </ContinentsContext.Provider>
  )
}

export function useContinents() {
  const context = useContext(ContinentsContext)
  return context
}
