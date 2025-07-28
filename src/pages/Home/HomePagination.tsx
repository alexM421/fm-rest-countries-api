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

    const pagesNumber = Math.ceil(filteredData.length/10) || 1
    

    const handlePaginationDisplay = () => {

        return(
            <>
                <div className={styles["pagination-item"]} onClick={() => setSelectedPage(1)}>
                    1
                </div>
                {
                    selectedPage-2>1
                    && <div className={`${styles["pagination-item"]} ${styles["pagination-dot-dot-dot"]}`}>
                        ...
                    </div>
                }
                {
                    selectedPage-1>1
                    && <div className={styles["pagination-item"]} onClick={() => setSelectedPage(prevpage => prevpage-1)}>
                        {selectedPage-1}
                    </div>
                }
                {
                    selectedPage!==1 
                    && selectedPage !==pagesNumber 
                    && <div className={`${styles["pagination-item"]} ${styles["pagination-current-item"]}`}>
                        {selectedPage}
                    </div>
                }
                {
                    selectedPage+1<pagesNumber  
                    && <div className={styles["pagination-item"]} onClick={() => setSelectedPage(prevpage => prevpage+1)}>
                        {selectedPage+1}
                    </div>
                }
                {
                    selectedPage+2<pagesNumber  
                    && <div className={`${styles["pagination-item"]} ${styles["pagination-dot-dot-dot"]}`}>
                        ...
                    </div>
                }
                {
                    pagesNumber!==1
                    &&<div className={styles["pagination-item"]} onClick={() => setSelectedPage(pagesNumber)}>
                        {pagesNumber}            
                    </div>
                }
            </>
        )
    }



    return(
        <div className={styles.pagination}>
            <div className={`${styles.previous} ${selectedPage===1? styles.disabled:""}`} onClick={() => setSelectedPage(prevpage => prevpage-1)}>
                <ChevronDown/>
                <p>Previous</p>
            </div>
            {handlePaginationDisplay()}
            <div className={`${styles.next} ${selectedPage===pagesNumber? styles.disabled:""}`} onClick={() => setSelectedPage(prevpage => prevpage+1)}>
                <p>Next</p>
                <ChevronDown/>
            </div>
        </div>
    )
}