import { IBookDetails } from '../types/types'
import { addToFavorites, removeFromFavorites } from '../redux/favorites-slice'
import { addToCart } from '../redux/cart-slice'
import { useDispatch } from 'react-redux'
import styles from '../styles/bookpage.module.css'
import bookmark from '../assets/bookmark.svg'
import minus from '../assets/minus.svg'
import plus from '../assets/plus.svg'

interface IBookActionsProps {
    bookDetails: IBookDetails
    isFavorite: boolean
    isAddedToCart: boolean
}

export const BookActions: React.FC<IBookActionsProps> = ({ bookDetails, isFavorite, isAddedToCart }) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if (!isAddedToCart) {
            dispatch(addToCart({ ...bookDetails, quantity: 1 }))
        }
    }

    return (
        <div className={styles.bookActions}>
            <button
                className={`${styles.iconButton} ${isFavorite ? styles.iconButtonActive : ''}`}
                onClick={() =>
                    isFavorite
                        ? dispatch(removeFromFavorites(bookDetails.isbn13))
                        : dispatch(addToFavorites(bookDetails))
                }
            >
                <img
                    src={isFavorite ? minus : bookmark}
                    alt={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                />
            </button>

            <button
                className={`${styles.iconButton} ${isAddedToCart ? styles.iconButtonAdded : ''}`}
                onClick={handleAddToCart}
                disabled={isAddedToCart}
            >
                <img src={plus} alt="Add to cart" />
            </button>
        </div>
    )
}
