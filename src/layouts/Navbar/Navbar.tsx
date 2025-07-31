//CSS
import styles from "./Navbar.module.css"
//Navbar
import NavbarThemeToggle from "./NavbarThemeToggle"

export default function Navbar () {



    return(
        <div className={styles.navbar}>
            <h1 className="text-preset-2">Where in the world?</h1>
            <NavbarThemeToggle/>
        </div>
    )
}