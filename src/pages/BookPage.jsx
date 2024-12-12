import '../styles/bookpage.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookDetails } from '../store/booksSlice'
import { useParams } from 'react-router-dom'

export function BookPage() {
    const { isbn13 } = useParams()
    const dispatch = useDispatch()
    const { bookDetails, status } = useSelector((state) => state.books)

    useEffect(() => {
        dispatch(fetchBookDetails(isbn13))
    }, [dispatch, isbn13])

    if (status === 'loading') return <p>Loading...</p>
    if (status === 'failed') return <p>Failed to load data</p>

    return (
        <div className="book-page">
            {bookDetails && (
                <>
                    <h1>{bookDetails.title}</h1>
                    <img src={bookDetails.image} alt={bookDetails.title} />
                    <p>{bookDetails.desc}</p>
                </>
            )}
        </div>
    )
}
