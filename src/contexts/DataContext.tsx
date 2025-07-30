import { createContext ,useContext, useEffect, useState, type ReactElement } from "react";
import { slugify } from "../utils/utils";

export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  currencies: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    [languageCode: string]: string;
  };
  borders: string[];
  population: number;
  tld: string[];
}

export type CountryData = Country & {
  slug: string
}

type DataContextType =  
    | []
    | CountryData[]
const DataContext = createContext<DataContextType>([])

export function DataProvider ({ children }:{children: ReactElement}) {

    const [countriesData, setCountriesData] = useState<DataContextType>([])

    useEffect(() => {

        const loadCountriesData = async () => {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=flags,population,name,tld,capital,region,subregion,languages,currencies,borders")
            const data = await res.json()
            const sluggedData = data.map((countryData:Country)=> ({...countryData, slug: slugify(countryData.name.common)}))
            setCountriesData(sluggedData)
        }

        loadCountriesData()


    },[])

    return(
        <DataContext.Provider value={countriesData}>
            {children}
        </DataContext.Provider>
    )
}


export function useDataContext () {

    const context = useContext(DataContext)

    if(!context){
        throw new Error("data context is undefined.")
    }

    return  context

}

