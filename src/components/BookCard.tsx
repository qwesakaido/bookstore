import { NavLink } from 'react-router-dom'
import { IBook } from '../types/types'
import styles from '../styles/bookcard.module.css'

interface BookCardProps {
    book: IBook
}

export function BookCard({ book }: BookCardProps) {
    return (
        <div className={styles.bookCard}>
            <img src={book.image} alt={book.title} className={styles.bookImage} />
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p>{book.price}</p>
            <NavLink to={`/book/${book.isbn13}`} className={styles.bookDetailsLink}>Подробнее</NavLink>
        </div>
    )
}
