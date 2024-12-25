import '../styles/cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, clearCart } from '../redux/cartSlice'

export function CartPage() {
    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.cart)

    if (items.length === 0) {
        return <p className="empty-message">Вы пока ничего не добавили в корзину.</p>
    }

    return (
        <div className="cart-page">
            <h1>Корзина</h1>
            <div className="cart-items">
                {items.map((item) => (
                    <div key={item.isbn13} className="cart-item">
                        <img src={item.image} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h2>{item.title}</h2>
                            <p>Количество: {item.quantity}</p>
                            <button
                                className="remove-item"
                                onClick={() => dispatch(removeFromCart(item.isbn13))}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
