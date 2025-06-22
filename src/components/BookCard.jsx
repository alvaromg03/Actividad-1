import { Link } from 'react-router-dom';
import './BookCard.css'

const BookCard = ({ id, title, author, cover, price }) => {
    return (
        <div className="card h-100">
            <img src={cover} className="card-img-top" alt={`Portada de ${title}`} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted mb-1">{author}</p>
                <p className="card-text fw-bold text-primary mb-3">{price.toFixed(2)} €</p>
                <Link to={`/book/${id}`} className="btn btn-primary mt-auto">
                    Ver detalles
                </Link>
            </div>
        </div>
    );
};

export default BookCard;


