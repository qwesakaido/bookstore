import styles from '../styles/header.module.css'
import search from '../assets/search.svg'
import favorite from '../assets/favorite.svg'
import cart from '../assets/cart.svg'
import join from '../assets/join.svg'
import logo from '../assets/bookstore.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <NavLink to="/" className={styles.navLink}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </NavLink>
                <div className={styles.navLinks}>
                    <NavLink to="/search" className={styles.navLink}>
                        <img src={search} alt="Search" />
                    </NavLink>
                    <NavLink to="/favorites" className={styles.navLink}>
                        <img src={favorite} alt="Favorites" />
                    </NavLink>
                    <NavLink to="/cart" className={styles.navLink}>
                        <img src={cart} alt="Cart" />
                    </NavLink>
                    <NavLink to="/login" className={styles.navLink}>
                        <img src={join} alt="Login" />
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}
