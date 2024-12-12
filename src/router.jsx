import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { BookPage } from './pages/BookPage'
import { SearchPage } from './pages/SearchPage'

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
        ],
    },
])
