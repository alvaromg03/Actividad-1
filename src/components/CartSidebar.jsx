import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="cart-sidebar__header">
                <h5>Tu carrito</h5>
                <button onClick={onClose} className="btn-close"></button>
            </div>
            <div className="cart-sidebar__body">
                {cart.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    <>
                        <ul className="list-group mb-3">
                            {cart.map((item) => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <strong>{item.title}</strong>
                                        <br />
                                        <small>{item.quantity} x {item.price.toFixed(2)} €</small>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="btn btn-sm btn-danger">Eliminar</button>
                                </li>
                            ))}
                        </ul>
                        <Link to="/checkout" className="btn btn-primary w-100" onClick={onClose}>
                            Ir al Checkout
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
