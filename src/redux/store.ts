import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books-slice'
import favoriteReducer from './favorites-slice'
import cartReducer from './cart-slice'

export const store = configureStore({
    reducer: {
        books: booksReducer,
        favorites: favoriteReducer,
        cart: cartReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
