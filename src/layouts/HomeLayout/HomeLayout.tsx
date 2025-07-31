//CSS
import styles from "./HomeLayout.module.css"
//React Router
import { Outlet } from "react-router-dom"
//layouts
import Navbar from "../Navbar/Navbar"


export default function HomeLayout () {



    return(
        <div className={styles["home-layout"]}>
            <Navbar/>
            <Outlet/>
        </div>
    )
}