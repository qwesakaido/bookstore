import styles from '../styles/searchpage.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooksByTitle } from '../redux/books-slice'
import { BookCard } from '../components/BookCard'
import { Pagination } from '../components/Pagination'
import { IRootState } from '../types/types'
import { AppDispatch } from '../redux/store'

export function SearchPage() {
    const [query, setQuery] = useState<string>('')
    const [page, setPage] = useState<number>(1)
    const dispatch = useDispatch<AppDispatch>()
    const { searchResults, status, error } = useSelector((state: IRootState) => state.books)

    useEffect(() => {
        if (query.trim()) {
            dispatch(fetchBooksByTitle({ title: query, page }))
        }
    }, [page, query, dispatch])

    return (
        <div className={styles.searchPage}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by title"
                />
            </div>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}

            {searchResults?.books && searchResults.books.length > 0 ? (
                <div className={styles.bookList}>
                    {searchResults.books.map((book) => (
                        <BookCard key={book.isbn13} book={book} />
                    ))}
                    <Pagination
                        currentPage={page}
                        totalResults={Number(searchResults.total)}
                        onPageChange={setPage}
                    />
                </div>
            ) : status === 'succeeded' && <p>No results found</p>}
        </div>
    )
}
