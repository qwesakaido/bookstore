import styles from '../styles/homepage.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewReleases } from '../redux/books-slice'
import { BookCard } from '../components/BookCard'
import { IRootState } from '../types/types'
import { IBook } from '../types/types'
import { AppDispatch } from '../redux/store'


export function HomePage() {
    const dispatch = useDispatch<AppDispatch>()
    const { newReleases, status } = useSelector((state: IRootState) => state.books)

    useEffect(() => {
        dispatch(fetchNewReleases())
    }, [dispatch])

    if (status === 'loading') return <p>Loading...</p>
    if (status === 'failed') return <p>Failed to load data</p>

    return (
        <div className={styles.homepage}>
            <h1>New Releases Books</h1>
            <div className={styles.booklist}>
                {newReleases.map((book: IBook) => (
                    <BookCard key={book.isbn13} book={book} />
                ))}
            </div>
        </div>
    )
}
