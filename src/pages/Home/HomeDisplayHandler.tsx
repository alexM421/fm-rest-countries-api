//types
import type { Country } from "../../contexts/DataContext"

export function getFilteredData (data: Country[], selectedRegion: string, search: string):Country[]{

     const filteredData = selectedRegion!=="All"
         ?data
             .filter((countryData: Country) => countryData.region.toLowerCase() === selectedRegion.toLowerCase() && countryData.name.common.includes(search))
         :data
             .filter((countryData: Country) => countryData.name.common.toLowerCase().includes(search.toLowerCase()))
    
    const sortedData = filteredData.sort((countryA, countryB) => countryA.name.common.localeCompare(countryB.name.common))

    return sortedData
             
}
