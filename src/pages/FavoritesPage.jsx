import '../styles/favorites.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function FavoritesPage() {
    const { favorites } = useSelector((state) => state.favorites)

    if (favorites.length === 0) {
        return <p className="empty-message">Вы пока ничего не добавили в закладки.</p>
    }

    return (
        <div className="favorites-page">
            <h1>Закладки</h1>
            <div className="favorites-list">
                {favorites.map((book) => (
                    <div key={book.isbn13} className="favorite-item">
                        <img src={book.image} alt={book.title} className="favorite-image" />
                        <div className="favorite-details">
                            <h2>{book.title}</h2>
                            <p>{book.subtitle}</p>
                            <Link to={`/book/${book.isbn13}`} className="view-details">
                                Подробнее
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
