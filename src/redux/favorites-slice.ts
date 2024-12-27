import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFavoriteBook } from '../types/types'
import { IFavoritesState } from '../types/types'

const initialState: IFavoritesState = {
    favorites: []
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<IFavoriteBook>) => {
            state.favorites.push(action.payload)
        },
        removeFromFavorites: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(
                (book) => book.isbn13 !== action.payload
            )
        }
    }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
