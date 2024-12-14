import '../styles/cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, clearCart } from '../store/cartSlice'

export function CartPage() {
    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.cart)

    return (
        <div className="cart-page">
            <h1>Корзина</h1>
            {items.length === 0 ? (
                <p className="empty-cart">Ваша корзина пуста</p>
            ) : (
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
                    <button className="clear-cart" onClick={() => dispatch(clearCart())}>
                        Очистить корзину
                    </button>
                </div>
            )}
        </div>
    )
}