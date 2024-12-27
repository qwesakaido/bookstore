import styles from '../styles/pagination.module.css'
import { IPaginationProps } from '../types/types'

export function Pagination({ currentPage, totalResults, onPageChange }: IPaginationProps) {
    const totalPages = Math.ceil(totalResults / 10)

    return (
        <div className={styles.pagination}>
            <div className={styles.paginationInfo}>
                Page {currentPage} of {totalPages} | Total Results: {totalResults}
            </div>
            <div className={styles.paginationButtons}>
                <button
                    className={styles.paginationButton}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev Page
                </button>
                <button
                    className={styles.paginationButton}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next Page
                </button>
            </div>
        </div>
    )
}
