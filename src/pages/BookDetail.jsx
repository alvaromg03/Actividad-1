import { useParams } from 'react-router-dom';
import books from '../data/books';
import { useCart } from '../context/CartContext';
import './BookDetail.css';

const BookDetail = () => {
    const { id } = useParams();
    const book = books.find((b) => b.id === parseInt(id));
    const { addToCart } = useCart();

    if (!book) return <div className="book-detail__not-found">Libro no encontrado.</div>;

    return (
        <div className="book-detail__container">
            <div className="book-detail row g-4">
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={book.cover} alt={book.title} className="book-detail__image" />
                </div>
                <div className="col-md-8 book-detail__info">
                    <h2 className="book-detail__title">{book.title}</h2>
                    <p className="text-muted">{book.author}</p>
                    <p>{book.description}</p>
                    <p className="fw-bold text-primary">{book.price.toFixed(2)} €</p>
                    <button onClick={() => addToCart(book)} className="book-detail__button">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
