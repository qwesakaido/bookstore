import '../styles/bookpage.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookDetails } from '../redux/booksSlice'
import { addToFavorites, removeFromFavorites } from '../redux/favoritesSlice'
import { addToCart, openModal, closeModal } from '../redux/cartSlice'
import { useParams } from 'react-router-dom'

// Импорты ваших иконок
import bookmark from '../assets/bookmark.svg'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'

export function BookPage() {
    const { isbn13 } = useParams()
    const dispatch = useDispatch()

    const { bookDetails, status } = useSelector((state) => state.books)
    const { favorites } = useSelector((state) => state.favorites)
    const modalImage = useSelector((state) => state.cart.modalImage)

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
                    <h1 className="book-title">{bookDetails.title}</h1>
                    <div className="book-content">
                        <img
                            className="book-image"
                            src={bookDetails.image}
                            alt={bookDetails.title}
                            onClick={() => dispatch(openModal(bookDetails.image))}
                        />
                        <div className="book-info">
                            <p><strong>Автор:</strong> {bookDetails.authors}</p>
                            <p><strong>Цена:</strong> {bookDetails.price}</p>
                            <p><strong>Язык:</strong> {bookDetails.language}</p>
                            <p className="book-desc">{bookDetails.desc}</p>
                        </div>
                    </div>

                    <div className="book-actions">
                        <button
                            className={`icon-button ${isFavorite ? 'icon-button-active' : ''}`}
                            onClick={() =>
                                isFavorite
                                    ? dispatch(removeFromFavorites(isbn13))
                                    : dispatch(addToFavorites(bookDetails))
                            }
                        >
                            <img
                                src={isFavorite ? minus : bookmark}
                                alt={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                            />
                        </button>

                        <button
                            className="icon-button"
                            onClick={() => dispatch(addToCart(bookDetails))}
                        >
                            <img src={plus} alt="Add to cart" />
                        </button>
                    </div>

                    {modalImage && (
                        <div
                            className="image-modal"
                            onClick={() => dispatch(closeModal())}
                        >
                            <div className="image-modal-content">
                                <img
                                    src={modalImage}
                                    alt="Book Cover"
                                    className="modal-image"
                                />
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
