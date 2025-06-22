import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        const alreadyInCart = cart.find((item) => item.id === book.id);
        if (alreadyInCart) {
            // Aumentar la cantidad si ya existe
            setCart(
                cart.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...book, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook para usar el contexto
export const useCart = () => useContext(CartContext);
