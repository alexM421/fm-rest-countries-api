//CSS
import styles from "./Home.module.css"
//react
import { useEffect, useRef, useState } from "react"
//assets
import ChevronDown from "../../assets/ChevronDown"
//types
type HomeFilterProps = {
    selectedRegion: string,
    setSelectedRegion: (string: string |((param: string) => string)) => void
}

export default function HomeFilter ({selectedRegion, setSelectedRegion }:HomeFilterProps) {

    
    const [isDisplayed, setIsDisplayed] = useState<boolean>(false)


    const optionsRef = useRef<HTMLDivElement>(null)
    const selectedRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {

            if(!optionsRef.current || !selectedRef.current){
                return
            }

            if(!optionsRef.current.contains(e.target as Node) && !selectedRef.current.contains(e.target as Node)){
                setIsDisplayed(false)
            }
        }

        document.body.addEventListener("mousedown",handleClickOutside)

        return () => document.body.removeEventListener("mousedown",handleClickOutside)

    },[])


    const handleSelect = (e: React.MouseEvent<HTMLParagraphElement>) => {
        const target = e.target as HTMLParagraphElement
        if(target.textContent){
            setSelectedRegion(target.textContent)
            setIsDisplayed(false)
        }
    }

    return(
        <div 
            className={`${styles["home-filter"]} ${isDisplayed && styles["home-displayed"]}`}
            ref={selectedRef}
            >
            <div 
                className={styles.selected} 
                onClick={() => setIsDisplayed(prevState => !prevState)}
            >
                <p className="text-preset-5-regular">{selectedRegion}</p>
                <ChevronDown/>
            </div>
            <div 
            className={styles["select-options"]} 
            ref={optionsRef}
            >
                <p 
                    className="text-preset-5-regular"
                    onClick={handleSelect}
                >All</p>
                <p 
                    className="text-preset-5-regular"
                    onClick={handleSelect}
                >Africa</p>
                <p 
                    className="text-preset-5-regular"
                    onClick={handleSelect}
                >Americas</p>
                <p 
                    className="text-preset-5-regular"
                    onClick={handleSelect}
                >
                Asia</p>
                <p 
                    className="text-preset-5-regular"
                    onClick={handleSelect}
                >Europe</p>
                <p 
                    className="text-preset-5-regular"
                    onClick={handleSelect}
                >Oceania</p>
            </div>
        </div>
    )
}