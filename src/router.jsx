import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { BookPage } from './pages/BookPage'
import { SearchPage } from './pages/SearchPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { CartPage } from './pages/CartPage'
import { LoginPage } from './pages/LoginPage'

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/book/:isbn13',
                element: <BookPage />,
            },
            {
                path: '/search',
                element: <SearchPage />,
            },
            {
                path: '/favorites',
                element: <FavoritesPage />,
            },
            {
                path: '/cart',
                element: <CartPage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
        ],
    },
])
