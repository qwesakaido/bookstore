import { FC } from 'react'
import { ICartItem } from '../types/types'
import styles from '../styles/cart.module.css'
import { useDispatch } from 'react-redux'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cart-slice'

interface CartItemProps {
    item: ICartItem
}

const CartItem: FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.cartItem}>
            <img src={item.image} alt={item.title} className={styles.cartItemImage} />
            <div className={styles.cartItemDetails}>
                <h2>{item.title}</h2>
                <p>Количество: {item.quantity}</p>
                <div className={styles.quantityActions}>
                    <button
                        className={styles.decreaseQuantity}
                        onClick={() => dispatch(decreaseQuantity(item.isbn13))}
                    >
                        -
                    </button>
                    <button
                        className={styles.increaseQuantity}
                        onClick={() => dispatch(increaseQuantity(item.isbn13))}
                    >
                        +
                    </button>
                </div>
                <button
                    className={styles.removeItem}
                    onClick={() => dispatch(removeFromCart(item.isbn13))}
                >
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default CartItem
