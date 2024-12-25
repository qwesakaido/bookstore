import { Link } from 'react-router-dom'
import '../styles/bookcard.scss'

export function BookCard({ book }) {
    return (
        <div className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h3 className="book-title">{book.title}</h3>
            {/* <p className="book-subtitle">{book.subtitle}</p> */}
            <p>{book.price}</p>
            <Link to={`/book/${book.isbn13}`} className="book-details-link">Подробнее</Link>
        </div>
    )
}
