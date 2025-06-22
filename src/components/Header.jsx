import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = ({ onCartClick }) => {
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <Link to="/" className="navbar-brand">Relatos de Papel</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto gap-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/catalog" className="nav-link">Catálogo</Link>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-outline-light position-relative" onClick={onCartClick}>
                            🛒 Carrito
                            {totalItems > 0 && (
                                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </span>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;


