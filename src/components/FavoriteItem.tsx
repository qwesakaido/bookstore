import { IBookDetails } from '../types/types'
import { NavLink } from 'react-router-dom'
import styles from '../styles/favorites.module.css'

interface FavoriteItemProps {
    book: IBookDetails
}

export const FavoriteItem: React.FC<FavoriteItemProps> = ({ book }) => {
    return (
        <div key={book.isbn13} className={styles.favoriteItem}>
            <img src={book.image} alt={book.title} className={styles.favoriteImage} />
            <div className={styles.favoriteDetails}>
                <h2>{book.title}</h2>
                <p>{book.subtitle}</p>
                <NavLink to={`/book/${book.isbn13}`} className={styles.viewDetails}>
                    Подробнее
                </NavLink>
            </div>
        </div>
    )
}
