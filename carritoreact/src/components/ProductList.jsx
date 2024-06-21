// Importamos React y el componente Product
import React from 'react';
import Product from './Product';

// Definimos el componente ProductList, que recibe las props `products`, `onAddToCart` y `onEditProduct`
function ProductList({ products, onAddToCart, onEditProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => ( // Iteramos sobre la lista de productos
        <Product
          key={product.id} // Asignamos una key única a cada producto
          product={product} // Pasamos el producto como prop
          onAddToCart={onAddToCart} // Pasamos la función para agregar al carrito
          onEditProduct={onEditProduct} // Pasamos la función para editar el producto
        />
      ))}
    </div>
  );
}

// Exportamos el componente ProductList para su uso en otros archivos
export default ProductList;
