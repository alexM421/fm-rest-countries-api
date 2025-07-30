//CSS
import styles from "./CountryCard.module.css"
//assets
import Arrow from "../../assets/Arrow"
//contexts
import { useDataContext, type CountryData } from "../../contexts/DataContext"
//React Router
import { Link, useParams } from "react-router-dom"
//CountryCard
import Loading from "./Loading"

export default function CountryCard () {

    const country = useParams().country
    const data = useDataContext()
    const countryData = data.find((countryData: CountryData) => countryData.slug === country)

    //handles loading
    if(!countryData){
        return(
            <Loading/>
        )
    }
    
    const { flags, name, population, region, subregion, capital, languages, currencies, tld, borders } = countryData 

    const nativeNames = Object.values(name.nativeName).map(names => names.common).join(",")
    const currenciesNames = Object.values(currencies).map(currency => currency.name).join(",")
    const languagesCommon = Object.values(languages).join(",")
    const topLevelDomain = tld.join(",")

    return(
        <div className={styles["country-card"]}>
            <Link className={styles.back} to="..">
                <Arrow/>    
                <p className="text-preset-4-light">Back</p>
            </Link>
            <div className={styles["flag-main"]}>
                <img src={flags.svg} alt={flags.alt}/>
                <div className={styles.infos}>
                    <div>
                        <h1 className="text-preset-1">{name.common}</h1>
                        <div>
                            <p>Native Name: <span>{nativeNames}</span></p>
                            <p>Population: <span>{population.toLocaleString("en-US")}</span></p>
                            <p>Region: <span>{region}</span></p>
                            <p>Sub Region: <span>{subregion}</span></p>
                            <p>Capital: <span>{capital}</span></p>
                            <p>Top Level Domain: <span>{topLevelDomain}</span></p>
                            <p>Currencies: <span>{currenciesNames}</span></p>
                            <p>Languages: <span>{languagesCommon}</span></p>
                        </div>
                    </div>
                    <div>
                        <p>Border Countries:</p>
                        {borders.map(border => <p className={`${styles["country-card-border"]} text-preset-5-light`}>{border}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}