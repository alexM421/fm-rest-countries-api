//CSS
import styles from "./Home.module.css"
//types
import type { Country } from "../../contexts/dataContext"

type HomeFlagCardProps = {
    data: Country,
}

export default function HomeFlagCard ({ data }:HomeFlagCardProps) {

    const { flags, population, name, region, capital } = data

    return(
        <div className={styles["flag-card"]}>
            <img src={flags.svg} alt={flags.alt}/>
            <div>
                <h1 className="text-preset-3">{name.common}</h1>
                <div>
                    <p><span>Population:</span> {population}</p>
                    <p><span>Region:</span> {region}</p>
                    <p><span>Capital:</span> {capital[0]}</p>
                </div>
            </div>
        </div>
    )
}