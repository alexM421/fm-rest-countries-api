//CSS
import styles from "./Home.module.css"
//assets
import ChevronDown from "../../assets/ChevronDown"
import type { Country } from "../../contexts/DataContext"

type HomePaginationProps = {
    filteredData: Country[],
    selectedPage: number,
    setSelectedPage: (num:number | ((prevNum :number) => number )) => void,
}

export default function HomePagination ({ filteredData ,selectedPage, setSelectedPage}:HomePaginationProps) {

    const pagesNumber = Math.ceil(filteredData.length/10) 

    const handlePaginationDisplay = () => {

        return(
            <>
                <div className={styles["pagination-item"]}>
                    1
                </div>
                {
                    selectedPage-2>1
                    && <div className={styles["pagination-item"]}>
                        ...
                    </div>
                }
                {
                    selectedPage-1>1
                    && <div className={styles["pagination-item"]}>
                        {selectedPage-1}
                    </div>
                }
                {
                    selectedPage!==1 
                    && selectedPage !==pagesNumber 
                    && <div className={styles["pagination-item"]}>
                        {selectedPage}
                    </div>
                }
                {
                    selectedPage+1<pagesNumber  
                    && <div className={styles["pagination-item"]}>
                        {selectedPage+1}
                    </div>
                }
                {
                    selectedPage+2<pagesNumber  
                    && <div className={styles["pagination-item"]}>
                        ...
                    </div>
                }
                {
                    pagesNumber!==1
                    &&<div className={styles["pagination-item"]}>
                        {pagesNumber}            
                    </div>
                }
            </>
        )
    }

    return(
        <div className={styles.pagination}>
            <div className={styles.previous}>
                <ChevronDown/>
                <p>Previous</p>
            </div>
            {handlePaginationDisplay()}
            <div className={styles.next}>
                <p>Next</p>
                <ChevronDown/>
            </div>
        </div>
    )
}