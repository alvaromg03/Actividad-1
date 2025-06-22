import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CartSidebar from './components/CartSidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Catalog from './pages/Catalog';
import BookDetail from './pages/BookDetail';
import Checkout from './pages/Checkout';
import './App.css'; // Import global styles

function App() {
    const [isCartOpen, setCartOpen] = useState(false);

    return (
        <Router>
            <div className="app-layout d-flex flex-column min-vh-100">
                <Header onCartClick={() => setCartOpen(true)} />
                <CartSidebar isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
                <main className="app-main flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/book/:id" element={<BookDetail />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;



