import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
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
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
