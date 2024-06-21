// src/App.jsx

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import EditProductForm from './components/EditProductForm'; 
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Aqtua', price: 10, image: '/images/aqtua.jpg' },
    { id: 2, name: 'Aloe', price: 20, image: '/images/ALOE.jpg' },
    { id: 3, name: 'Biocros', price: 30, image: '/images/BIOCROS.jpg' },
    { id: 4, name: 'Powermaker', price: 30, image: '/images/POWERMAKER.jpg' },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    setProductToEdit(null);
  };

  return (
    <div className="App">
      <h1>Mi Carrito de Compras</h1>
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onEditProduct={handleEditProduct}
      />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      {productToEdit && (
        <EditProductForm
          product={productToEdit}
          onUpdateProduct={handleUpdateProduct}
        />
      )}
    </div>
  );
}

export default App;
