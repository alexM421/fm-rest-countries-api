//CSS
import styles from "./Home.module.css"
//types
import type { JSX } from "react"
import type { Country } from "../../contexts/DataContext"
//home
import HomeFlagCard from "./HomeFlagCard"


export function getFilteredData (data: Country[], selectedRegion: string, search: string):Country[]{

     const filteredData = selectedRegion!=="All"
         ?data
             .filter((countryData: Country) => countryData.region.toLowerCase() === selectedRegion.toLowerCase() && countryData.name.common.includes(search))
         :data
             .filter((countryData: Country) => countryData.name.common.toLowerCase().includes(search.toLowerCase()))
    


    return filteredData
             
    }
