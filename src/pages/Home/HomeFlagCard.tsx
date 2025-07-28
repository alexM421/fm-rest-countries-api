//CSS
import styles from "./Home.module.css"
//react
import { Link } from "react-router-dom"
//utils
import { slugify } from "../../utils/utils"
//types
import type { Country } from "../../contexts/DataContext"

type HomeFlagCardProps = {
    data: Country,
}

export default function HomeFlagCard ({ data }:HomeFlagCardProps) {

    const { flags, population, name, region, capital } = data

   

    return(
        <Link className={styles["flag-card"]} to={`${slugify(name.common)}`}>
            <img src={flags.svg} alt={flags.alt}/>
            <div>
                <h1 className="text-preset-3">{name.common}</h1>
                <div>
                    <p><span>Population:</span> {population.toLocaleString("en-US")}</p>
                    <p><span>Region:</span> {region}</p>
                    <p><span>Capital:</span> {capital[0]}</p>
                </div>
            </div>
        </Link>
    )
}