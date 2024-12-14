import '../styles/bookpage.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookDetails } from '../store/booksSlice'
import { addToFavorites, removeFromFavorites } from '../store/favoritesSlice'
import { addToCart } from '../store/cartSlice'
import { useParams } from 'react-router-dom'

export function BookPage() {
    const { isbn13 } = useParams()
    const dispatch = useDispatch()

    const { bookDetails, status } = useSelector((state) => state.books)
    const { favorites } = useSelector((state) => state.favorites)

    const isFavorite = favorites.some((book) => book.isbn13 === isbn13)

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

                    <div className="book-actions">
                        <button
                            className={isFavorite ? 'remove-favorite' : 'add-favorite'}
                            onClick={() =>
                                isFavorite
                                    ? dispatch(removeFromFavorites(isbn13))
                                    : dispatch(addToFavorites(bookDetails))
                            }
                        >
                            {isFavorite ? 'Удалить из закладок' : 'Добавить в закладки'}
                        </button>

                        <button
                            className="add-to-cart"
                            onClick={() => dispatch(addToCart(bookDetails))}
                        >
                            Добавить в корзину
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
