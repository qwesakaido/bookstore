import { useSelector } from 'react-redux'
import { IRootState } from '../types/types'
import { IBookDetails } from '../types/types'
import { FavoriteItem } from '../components/FavoriteItem'
import { EmptyFavorites } from '../components/EmptyFavorites'
import styles from '../styles/favorites.module.css'

export function FavoritesPage() {
    const { favorites } = useSelector((state: IRootState) => state.favorites)

    if (favorites.length === 0) {
        return <EmptyFavorites />
    }

    return (
        <div className={styles.favoritesPage}>
            <h1>Закладки</h1>
            <div className={styles.favoritesList}>
                {favorites.map((book: IBookDetails) => (
                    <FavoriteItem key={book.isbn13} book={book} />
                ))}
            </div>
        </div>
    )
}
