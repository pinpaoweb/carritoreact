// src/components/Cart.jsx
import React from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Su Carrito esta vacio.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <span>{item.name}</span>
                            <span>{item.price} COP</span>
                            <button onClick={() => onRemoveFromCart(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: {total} COP</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;