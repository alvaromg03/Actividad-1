import { useParams } from 'react-router-dom';
import books from '../data/books';
import { useCart } from '../context/CartContext';
import './BookDetail.css'

const BookDetail = () => {
    const { id } = useParams();
    const book = books.find((b) => b.id === parseInt(id));
    const { addToCart } = useCart();

    if (!book) return <div className="py-5" style={{ width: '100%' }}>Libro no encontrado.</div>;

    return (
        <div className="py-5" style={{ width: '100%' }}>
            <div className="row g-4">
                <div className="col-md-4">
                    <img src={book.cover} alt={book.title} className="img-fluid rounded shadow-sm" />
                </div>
                <div className="col-md-8">
                    <h2>{book.title}</h2>
                    <p className="text-muted">{book.author}</p>
                    <p>{book.description}</p>
                    <p className="fw-bold text-primary">{book.price.toFixed(2)} €</p>
                    <button onClick={() => addToCart(book)} className="btn btn-success mt-3">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
