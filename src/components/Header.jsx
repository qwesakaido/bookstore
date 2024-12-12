import '../styles/header.scss'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/search" className="nav-link">Search</Link>
            </nav>
        </header>
    )
}
