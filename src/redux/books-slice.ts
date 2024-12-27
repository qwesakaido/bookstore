import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { baseURL } from '../config/api.ts'
import { IBook } from '../types/types'
import { IBookDetails } from '../types/types'
import { ISearchResults } from '../types/types'
import { IBooksState } from '../types/types'
import axios from 'axios'

const initialState: IBooksState = {
    newReleases: [],
    bookDetails: null,
    searchResults: null,
    status: 'idle',
    error: null,
}

export const fetchNewReleases = createAsyncThunk<IBookDetails[]>('books/fetchNewReleases', async () => {
    const response = await axios.get(`${baseURL}/new`)
    return response.data.books.map((book: IBook) => ({
        ...book,
        quantity: 0,
    }))
})

export const fetchBookDetails = createAsyncThunk<IBookDetails, string>(
    'books/fetchBookDetails',
    async (isbn13) => {
        const response = await axios.get(`${baseURL}/books/${isbn13}`)
        const data = response.data
        return {
            ...data,
            quantity: 0, // Если нужно, добавьте дополнительные свойства
        }
    }
)

export const fetchBooksByTitle = createAsyncThunk<
    ISearchResults,
    { title: string; page: number },
    { rejectValue: string }
>('books/fetchBooksByTitle', async ({ title, page }, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseURL}/search/${encodeURIComponent(title)}/${page}`)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.error || error.message)
    }
})

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewReleases.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchNewReleases.fulfilled, (state, action: PayloadAction<IBook[]>) => {
                state.newReleases = action.payload
                state.status = 'succeeded'
            })
            .addCase(fetchNewReleases.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'An error occurred'
            })
            .addCase(fetchBookDetails.fulfilled, (state, action: PayloadAction<IBook>) => {
                state.bookDetails = action.payload
                state.status = 'succeeded'
            })
            .addCase(fetchBooksByTitle.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchBooksByTitle.fulfilled, (state, action: PayloadAction<ISearchResults>) => {
                state.searchResults = action.payload
                state.status = 'succeeded'
            })
            .addCase(fetchBooksByTitle.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload || 'An error occurred'
            })
    },
})

export default booksSlice.reducer
