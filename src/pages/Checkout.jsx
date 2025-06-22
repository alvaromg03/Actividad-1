import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const handleConfirm = () => {
        alert('¡Pedido realizado con éxito!');
        clearCart();
        navigate('/');
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container-fluid checkout py-5">
            <h2 className="text-center mb-4">Resumen de compra</h2>

            {cart.length === 0 ? (
                <p className="text-center text-muted">Tu carrito está vacío.</p>
            ) : (
                <>
                    <ul className="list-group mb-4">
                        {cart.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{item.title}</strong> <br />
                                    <small>{item.quantity} x {item.price.toFixed(2)} €</small>
                                </div>
                                <span className="fw-bold">{(item.price * item.quantity).toFixed(2)} €</span>
                            </li>
                        ))}
                    </ul>

                    <h5 className="text-end me-2 mb-4">
                        Total: <span className="text-primary">{total.toFixed(2)} €</span>
                    </h5>

                    <div className="text-center">
                        <button className="btn btn-success px-4" onClick={handleConfirm}>
                            Realizar pedido
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;

