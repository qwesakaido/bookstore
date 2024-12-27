// CartPage.tsx
import styles from '../styles/cart.module.css'
import { useSelector } from 'react-redux'
import { IRootState } from '../types/types'
import CartItem from '../components/CartItem'
import CartActions from '../components/CartActions'

export function CartPage() {
    const { items } = useSelector((state: IRootState) => state.cart)

    if (items.length === 0) {
        return <p className={styles.emptyCart}>Вы пока ничего не добавили в корзину.</p>
    }

    return (
        <div className={styles.cartPage}>
            <h1>Корзина</h1>
            <div className={styles.cartItems}>
                {items.map((item) => (
                    <CartItem key={item.isbn13} item={item} />
                ))}
            </div>
            <CartActions />
        </div>
    )
}
