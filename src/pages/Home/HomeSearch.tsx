//CSS
import styles from "./Home.module.css"
//assets
import Search from "../../assets/Search"
import type { SetStateAction } from "react"
// types
type HomeSearchProps = {
    search: string,
    setSearch: (value: string |((param: string) => string)) => void
}


export default function HomeSearch ({ search, setSearch }: HomeSearchProps) {


    

    return(
        <label className={styles["home-search"]}>
            <Search/>
            <input 
                className="text-preset-5-regular" 
                type="text" 
                placeholder="Search for a country…"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </label>
    )
}