//CSS
import styles from "./CountryCard.module.css"
//assets
import Arrow from "../../assets/Arrow"
//contexts
import { useDataContext, type CountryData } from "../../contexts/DataContext"
//React Router
import { useParams } from "react-router-dom"
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
    const { flags } = countryData 

    return(
        <div className={styles["country-card"]}>
            <div className={styles.back}>
                <Arrow/>
                <p>Back</p>
            </div>
            <div className={styles["flag-main"]}>
                <img src={flags.svg} alt={flags.alt}/>
                <div className={styles.infos}>
                    <div>
                        <h1>Country</h1>
                    </div>
                    <div>
                        <p>Border Countries</p>
                    </div>
                </div>
            </div>
        </div>
    )
}