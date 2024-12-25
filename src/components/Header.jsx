import '../styles/header.scss'
import search from '../assets/search.svg'
import favorite from '../assets/favorite.svg'
import cart from '../assets/cart.svg'
import join from '../assets/join.svg'
import logo from '../assets/bookstore.svg'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className="header">
            <nav className="nav-container">
            <Link to="/" className="nav-link"><img src={logo} alt="Logo" className="logo" /></Link>
                <div className="nav-links">
                    <Link to="/search" className="nav-link"><img src={search} alt="Search" /></Link>
                    <Link to="/favorites" className="nav-link"><img src={favorite} alt="Favorites" /></Link>
                    <Link to="/cart" className="nav-link"><img src={cart} alt="Cart" /></Link>
                    <Link to="/login" className="nav-link"><img src={join} alt="Login" /></Link>
                </div>
            </nav>
        </header>
    )
}

