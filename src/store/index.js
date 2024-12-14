import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './booksSlice'
import favoriteReducer from './favoritesSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
    reducer: {
        books: booksReducer,
        favorites: favoriteReducer,
        cart: cartReducer
    }
})
