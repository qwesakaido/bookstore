import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    modalImage: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const book = action.payload
            const existingItem = state.items.find((item) => item.isbn13 === book.isbn13)
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ ...book, quantity: 1 })
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter((item) => item.isbn13 !== action.payload)
        },
        clearCart(state) {
            state.items = []
        },
        openModal(state, action) {
            state.modalImage = action.payload
        },
        closeModal(state) {
            state.modalImage = null
        },
    },
})

export const { addToCart, removeFromCart, clearCart, openModal, closeModal } = cartSlice.actions
export default cartSlice.reducer
