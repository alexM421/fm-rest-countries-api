//CSS
import styles from "./Navbar.module.css"
//assets
import Sun from "../../assets/Sun"
import Moon from "../../assets/Moon"
//React
import { useEffect, useState } from "react"

export default function NavbarThemeToggle () {

    const [isDarkModeOn, setIsDarkModeOn ] = useState<boolean>(false)

    const handleThemeChange = () => {
        setIsDarkModeOn(prevMode => !prevMode)
    }
    useEffect(() => {
        if(isDarkModeOn){
            document.body.classList.add("dark-mode")
            document.body.classList.remove("light-mode")
        }
        else if(!isDarkModeOn){
            document.body.classList.add("light-mode")
            document.body.classList.remove("dark-mode")
        }

    },[isDarkModeOn])

    return(
        <div 
        className={styles["navbar-theme-toggle"]}
        onClick={handleThemeChange}
        >
            {isDarkModeOn
            ?<>
                    <Sun/>
                    <p className="text-preset-4-semi">Light mode</p>
                </>
                :<>
                    <Moon/>
                    <p className="text-preset-4-semi">Dark mode</p>
                </>
            }
        </div>
    )
}