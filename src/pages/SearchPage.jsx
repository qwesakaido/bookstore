import '../styles/searchpage.scss'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooksByTitle } from '../redux/booksSlice'
import { BookCard } from '../components/BookCard'
import { Pagination } from '../components/Pagination'

export function SearchPage() {
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const { searchResults, status, error } = useSelector((state) => state.books)

    const handleSearch = () => {
        if (!query.trim()) {
            alert('Please enter a search query.')
            return
        }
        dispatch(fetchBooksByTitle({ title: query, page }))
    }

    useEffect(() => {
        if (query.trim()) {
            dispatch(fetchBooksByTitle({ title: query, page }))
        }
    }, [page, dispatch, query])

    return (
        <div className="search-page">
            <div className="search-bar">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by title"
                />
                <button type="button" onClick={handleSearch}>
                    Search
                </button>
            </div>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}

            {searchResults?.books?.length > 0 ? (
                <div className="book-list">
                    {searchResults.books.map((book) => (
                        <BookCard key={book.isbn13} book={book} />
                    ))}
                    <Pagination
                        currentPage={page}
                        totalResults={parseInt(searchResults.total)}
                        onPageChange={setPage}
                    />
                </div>
            ) : status === 'succeeded' && <p>No results found</p>}
        </div>
    )
}
