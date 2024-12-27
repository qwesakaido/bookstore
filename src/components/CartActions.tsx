import { FC } from 'react'
import styles from '../styles/cart.module.css'
import { useDispatch } from 'react-redux'
import { clearCart } from '../redux/cart-slice'

const CartActions: FC = () => {
    const dispatch = useDispatch()

    return (
        <div className={styles.cartActions}>
            <button className={styles.clearCart} onClick={() => dispatch(clearCart())}>
                Очистить корзину
            </button>
        </div>
    )
}

export default CartActions
