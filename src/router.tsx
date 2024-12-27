import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { BookPage } from './pages/BookPage.tsx'
import { SearchPage } from './pages/SearchPage.tsx'
import { FavoritesPage } from './pages/FavoritesPage.tsx'
import { CartPage } from './pages/CartPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'

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
] as RouteObject[])
