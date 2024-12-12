import '../styles/homepage.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewReleases } from '../store/booksSlice'
import { BookCard } from '../components/BookCard'

export function HomePage() {
    const dispatch = useDispatch()
    const { newReleases, status } = useSelector((state) => state.books)

    useEffect(() => {
        dispatch(fetchNewReleases())
    }, [dispatch])

    if (status === 'loading') return <p>Loading...</p>
    if (status === 'failed') return <p>Failed to load data</p>

    return (
        <div className="home-page">
            <h1>New Releases</h1>
            <div className="book-list">
                {newReleases.map((book) => (
                    <BookCard key={book.isbn13} book={book} />
                ))}
            </div>
        </div>
    )
}
