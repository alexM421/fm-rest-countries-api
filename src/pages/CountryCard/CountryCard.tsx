//CSS
import styles from "./CountryCard.module.css"
//assets
import Arrow from "../../assets/Arrow"
//contexts
import { useDataContext } from "../../contexts/DataContext"
import { useLocation } from "react-router-dom"

export default function CountryCard () {

    const location = useLocation()
    const { flags, population, name, region, capital } = useDataContext()
 
    
          
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