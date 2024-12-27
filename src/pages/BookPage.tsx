import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookDetails } from '../redux/books-slice'
import { useParams } from 'react-router-dom'
import { AppDispatch } from '../redux/store'

import { IBookDetails } from '../types/types'
import { IRootState } from '../types/types'
import { BookDetails } from '../components/BookDetails'
import { BookActions } from '../components/BookActions'

import styles from '../styles/bookpage.module.css'

export function BookPage() {
    const { isbn13 } = useParams()
    const dispatch = useDispatch<AppDispatch>()

    if (!isbn13) return <p>Invalid ISBN</p>

    const { bookDetails, status } = useSelector((state: IRootState) => state.books)
    const { favorites } = useSelector((state: IRootState) => state.favorites)
    const cartItems = useSelector((state: IRootState) => state.cart.items)

    const isFavorite = favorites.some((book: IBookDetails) => book.isbn13 === isbn13)
    const isAddedToCart = cartItems.some((item) => item.isbn13 === isbn13)

    useEffect(() => {
        dispatch(fetchBookDetails(isbn13))
    }, [dispatch, isbn13])

    if (status === 'loading') return <p>Loading...</p>
    if (status === 'failed') return <p>Failed to load data</p>

    return (
        <div className={styles.bookPage}>
            {bookDetails && (
                <>
                    <h1 className={styles.bookTitle}>{bookDetails.title}</h1>
                    <BookDetails bookDetails={bookDetails} />
                    <BookActions
                        bookDetails={bookDetails}
                        isFavorite={isFavorite}
                        isAddedToCart={isAddedToCart}
                    />

                    {isAddedToCart && (
                        <p className={styles.addedToCartMessage}>Товар добавлен в корзину</p>
                    )}
                </>
            )}
        </div>
    )
}
