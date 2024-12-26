import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_BASE = 'https://api.itbook.store/1.0'

export const fetchNewReleases = createAsyncThunk('books/fetchNewReleases', async () => {
    const response = await axios.get(`${API_BASE}/new`)
    return response.data.books
})

export const fetchBookDetails = createAsyncThunk('books/fetchBookDetails', async (isbn13) => {
    const response = await axios.get(`${API_BASE}/books/${isbn13}`)
    return response.data
})

export const fetchBooksByTitle = createAsyncThunk(
    'books/fetchBooksByTitle',
    async ({ title, page }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_BASE}/search/${encodeURIComponent(title)}/${page}`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.error || error.message)
        }
    }
)

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        newReleases: [],
        bookDetails: null,
        searchResults: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewReleases.fulfilled, (state, action) => {
                state.newReleases = action.payload
                state.status = 'succeeded'
            })
            .addCase(fetchBookDetails.fulfilled, (state, action) => {
                state.bookDetails = action.payload
                state.status = 'succeeded'
            })
            .addCase(fetchBooksByTitle.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchBooksByTitle.fulfilled, (state, action) => {
                state.searchResults = action.payload
                state.status = 'succeeded'
            })
            .addCase(fetchBooksByTitle.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload || 'An error occurred'
            })
            .addCase(fetchNewReleases.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchNewReleases.rejected, (state, action) => {
                state.error = action.error.message
                state.status = 'failed'
            })
    }
})

export default booksSlice.reducer
