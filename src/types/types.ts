export interface IFavoriteBook {
    isbn13: string
    [key: string]: any
}

export interface IFavoritesState {
    favorites: IFavoriteBook[]
}

export interface ICartItem {
    isbn13: string
    quantity: number
    [key: string]: any
}

export interface ICartState {
    items: ICartItem[]
    modalImage: string | null
}

export interface IBook {
    title: string
    subtitle: string
    image: string
    authors: string
    price: string
    language: string
    desc: string
    isbn13: string
    quantity: number
    
    [key: string]: any
}

export interface ISearchResults {
    books: IBook[]
    total: number
    page: number
}

export interface IBooksState {
    newReleases: IBook[]
    bookDetails: IBook | null
    searchResults: ISearchResults | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

export interface IMainProps {
    children: React.ReactNode
}

export interface IPaginationProps {
    currentPage: number
    totalResults: number
    onPageChange: (page: number) => void
}

export interface IBookDetails {
    title: string
    subtitle: string
    image: string
    authors: string
    price: string
    language: string
    desc: string
    isbn13: string
    quantity: number
}

export interface IRootState {
    books: IBooksState
    favorites: {
        favorites: IBookDetails[]
    }
    cart: {
        modalImage: string | null
        items: ICartItem[]
    }
}

export interface ICartItem {
    isbn13: string
    image: string
    title: string
    quantity: number
}

