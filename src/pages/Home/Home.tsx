//CSS
import { useDataContext } from "../../contexts/DataContext"
import styles from "./Home.module.css"
//React
import { useState } from "react"
//home
import HomeFilter from "./HomeFilter"
import HomeSearch from "./HomeSearch"
import HomeFlagCard from "./HomeFlagCard"
//types
import type { Country } from "../../contexts/DataContext"
import type { JSX } from "react"

export default function Home () {

    const data = useDataContext()

    const [selectedRegion, setSelectedRegion ] = useState<string>("All")
    const [search, setSearch] = useState<string>("")

    const displayFlagCards = ():JSX.Element => {
        
        const filteredData = selectedRegion!=="All"
            ?data
                .filter((countryData: Country) => countryData.region.toLowerCase() === selectedRegion.toLowerCase() && countryData.name.common.includes(search))
            :data
                .filter((countryData: Country) => countryData.name.common.toLowerCase().includes(search.toLowerCase()))

        const countriesFlagCards = filteredData.map((countryData:Country) => <HomeFlagCard data={countryData}/>)

        return (
            <div>
                {countriesFlagCards}
            </div>
        )
                
    }

    return(
        <div className={styles.home}>
            <div className={styles["home-header"]}>
                <HomeSearch search={search} setSearch={setSearch}/>
                <HomeFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
            </div>
            <div className={styles["home-flags"]}>
                {displayFlagCards()}
            </div>
        </div>
    )
}