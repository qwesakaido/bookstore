import '../styles/searchpage.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooksByTitle } from '../redux/booksSlice'
import { BookCard } from '../components/BookCard'

export function SearchPage() {
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const { searchResults, status } = useSelector((state) => state.books)

    const handleSearch = () => {
        dispatch(fetchBooksByTitle({ title: query, page }))
    }

    return (
        <div className="search-page">
            <div className="search-bar">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by title"
                />
                <button type='submit' onClick={handleSearch}>Search</button>
            </div>
            {status === 'loading' && <p>Loading...</p>}
            {searchResults && (
                <div className="book-list">
                    {searchResults.books.map((book) => (
                        <BookCard key={book.isbn13} book={book} />
                    ))}
                    <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
                </div>
            )}
        </div>
    )
}
