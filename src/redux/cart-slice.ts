// cart-slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '../types/types'
import { ICartState } from '../types/types'
import { loadCartFromLocalStorage, saveCartToLocalStorage } from '../utils/localStorage'

// Загружаем начальное состояние из localStorage
const initialState: ICartState = {
    items: loadCartFromLocalStorage(),
    modalImage: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ICartItem>) {
            const book = action.payload
            const existingItem = state.items.find((item) => item.isbn13 === book.isbn13)
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ ...book, quantity: 1 })
            }
            saveCartToLocalStorage(state.items)
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item.isbn13 !== action.payload)
            saveCartToLocalStorage(state.items)
        },
        clearCart(state) {
            state.items = []
            saveCartToLocalStorage(state.items)
        },
        openModal(state, action: PayloadAction<string>) {
            state.modalImage = action.payload
        },
        closeModal(state) {
            state.modalImage = null
        },
        increaseQuantity(state, action: PayloadAction<string>) {
            const item = state.items.find((item) => item.isbn13 === action.payload)
            if (item) {
                item.quantity += 1
                saveCartToLocalStorage(state.items)
            }
        },
        decreaseQuantity(state, action: PayloadAction<string>) {
            const item = state.items.find((item) => item.isbn13 === action.payload)
            if (item && item.quantity > 1) {
                item.quantity -= 1
                saveCartToLocalStorage(state.items)
            }
        },
    },
})

export const { addToCart, removeFromCart, clearCart, openModal, closeModal, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer
