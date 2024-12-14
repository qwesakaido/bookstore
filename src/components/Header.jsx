import '../styles/header.scss'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/" className="nav-link">Главная</Link>
                <Link to="/search" className="nav-link">Поиск</Link>
                <Link to="/favorites" className="nav-link">Закладки</Link>
                <Link to="/cart" className="nav-link">Корзина</Link>
                <Link to="/login" className="nav-link">Авторизация</Link>
            </nav>
        </header>
    )
}
