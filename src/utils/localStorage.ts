import { ICartItem } from '../types/types'

export const loadCartFromLocalStorage = (): ICartItem[] => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : []
}

export const saveCartToLocalStorage = (cartItems: ICartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
}
