import { useState } from 'react';
import books from '../data/books';
import BookCard from '../components/BookCard';
import './Catalog.css';

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container-fluid catalog py-5">
            <h2 className="text-center mb-4">Catálogo de libros</h2>

            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar por título..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="row">
                {filteredBooks.length === 0 ? (
                    <p className="text-center">No se encontraron libros.</p>
                ) : (
                    filteredBooks.map((book) => (
                        <div className="col-md-4 col-lg-3 mb-4" key={book.id}>
                            <BookCard {...book} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Catalog;
