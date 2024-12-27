import styles from '../styles/favorites.module.css'

export const EmptyFavorites: React.FC = () => {
    return <p className={styles.emptyMessage}>Вы пока ничего не добавили в закладки.</p>
}
