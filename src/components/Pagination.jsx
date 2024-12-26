import React from 'react'
import '../styles/pagination.scss'

export function Pagination({ currentPage, totalResults, onPageChange }) {
    const totalPages = Math.ceil(totalResults / 10)

    return (
        <div className="pagination">
            <div className="pagination-info">
                Page {currentPage} of {totalPages} | Total Results: {totalResults}
            </div>
            <div className="pagination-buttons">
                <button
                    className="pagination-button"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev Page
                </button>
                <button
                    className="pagination-button"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next Page
                </button>
            </div>
        </div>
    )
}
