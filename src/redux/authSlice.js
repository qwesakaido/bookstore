import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticated = true
            localStorage.setItem('token', action.payload.token)
        },
        logout(state) {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            localStorage.removeItem('token')
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
