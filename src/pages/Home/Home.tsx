//CSS
import { useDataContext } from "../../contexts/DataContext"
import styles from "./Home.module.css"
//React
import { useEffect, useState } from "react"
//home
import HomeFilter from "./HomeFilter"
import HomeSearch from "./HomeSearch"
import { getFilteredData } from "./HomeDisplayHandler"
import HomeFlagCard from "./HomeFlagCard"
//types
import type { JSX } from "react"
import type { Country } from "../../contexts/DataContext"
import HomePagination from "./HomePagination"

export default function Home ():JSX.Element {

    const data = useDataContext()

    const [selectedPage, setSelectedPage] = useState<number>(1)
    const [selectedRegion, setSelectedRegion ] = useState<string>("All")
    const [search, setSearch] = useState<string>("")

    const filteredData = getFilteredData(data, selectedRegion, search)

    useEffect(() => {
        setSelectedPage(1)
    },[search, selectedRegion])

    return(
        <div className={styles.home}>
            <div className={styles["home-header"]}>
                <HomeSearch search={search} setSearch={setSearch}/>
                <HomeFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
            </div>
            <div className={styles["home-flags"]}>
                <div>
                    {filteredData.slice((selectedPage-1)*10,selectedPage*10).map((countryData:Country) => <HomeFlagCard data={countryData} key={countryData.name.common}/>)}
                </div>
            </div>
            <HomePagination filteredData={filteredData} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </div>
    )
}