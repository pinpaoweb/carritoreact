// Importamos React desde la biblioteca React
import React from 'react';

// Definimos el componente Cart, que recibe las props `cartItems` y `onRemoveFromCart`
function Cart({ cartItems, onRemoveFromCart }) {
    // Calculamos el total de los precios de los productos en el carrito
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? ( // Si el carrito está vacío, mostramos un mensaje
                <p>Su Carrito esta vacio.</p>
            ) : ( // Si el carrito tiene productos, los mostramos
                <div>
                    {cartItems.map(item => ( // Iteramos sobre los elementos del carrito
                        <div key={item.id} className="cart-item">
                            <span>{item.name}</span>
                            <span>{item.price} COP</span>
                            <button onClick={() => onRemoveFromCart(item.id)}>Eliminar</button> {/* Botón para eliminar producto */}
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: {total} COP</h3> {/* Mostramos el total del carrito */}
                    </div>
                </div>
            )}
        </div>
    );
}

// Exportamos el componente Cart para su uso en otros archivos
export default Cart;
