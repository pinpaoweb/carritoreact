// src/components/Product.jsx

// Importamos React desde la biblioteca React
import React from 'react';

// Definimos el componente Product, que recibe las props `product`, `onAddToCart` y `onEditProduct`
function Product({ product, onAddToCart, onEditProduct }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} /> {/* Mostramos la imagen del producto */}
      <h2>{product.name}</h2> {/* Mostramos el nombre del producto */}
      <p>{product.price} COP</p> {/* Mostramos el precio del producto */}
      <button onClick={() => onAddToCart(product)}>Agregar a Carrito</button> {/* Botón para agregar al carrito */}
      <button onClick={() => onEditProduct(product)}>Editar</button> {/* Botón para editar el producto */}
    </div>
  );
}

// Exportamos el componente Product para su uso en otros archivos
export default Product;
