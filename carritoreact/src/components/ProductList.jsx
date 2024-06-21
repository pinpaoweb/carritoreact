// src/components/ProductList.jsx

import React from 'react';
import Product from './Product';

function ProductList({ products, onAddToCart, onEditProduct }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onEditProduct={onEditProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;
