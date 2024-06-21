// Importamos las dependencias necesarias desde React y otros componentes locales
import React, { useState } from 'react';
import ProductList from './components/ProductList'; // Componente para mostrar la lista de productos
import Cart from './components/Cart'; // Componente para mostrar el carrito de compras
import EditProductForm from './components/EditProductForm'; // Componente para editar productos
import './App.css'; // Importamos los estilos CSS

// Definimos el componente principal de la aplicación
function App() {
  // Estado inicial de productos, un array de objetos con id, nombre, precio e imagen
  const [products, setProducts] = useState([
    { id: 1, name: 'Aqtua', price: 10, image: '/images/aqtua.jpg' },
    { id: 2, name: 'Aloe', price: 20, image: '/images/ALOE.jpg' },
    { id: 3, name: 'Biocros', price: 30, image: '/images/BIOCROS.jpg' },
    { id: 4, name: 'Powermaker', price: 30, image: '/images/POWERMAKER.jpg' },
  ]);

  // Estado inicial para los artículos en el carrito, comienza como un array vacío
  const [cartItems, setCartItems] = useState([]);

  // Estado inicial para el producto que se va a editar, comienza como null
  const [productToEdit, setProductToEdit] = useState(null);

  // Función para agregar un producto al carrito
  const handleAddToCart = (product) => {
    // Actualizamos el estado del carrito agregando el nuevo producto
    setCartItems([...cartItems, product]);
  };

  // Función para eliminar un producto del carrito por su id
  const handleRemoveFromCart = (id) => {
    // Filtramos los productos para eliminar el que coincide con el id proporcionado
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Función para seleccionar un producto para editar
  const handleEditProduct = (product) => {
    // Actualizamos el estado con el producto seleccionado
    setProductToEdit(product);
  };

  // Función para actualizar un producto después de la edición
  const handleUpdateProduct = (updatedProduct) => {
    // Actualizamos la lista de productos con el producto editado
    setProducts(products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    // Limpiamos el estado del producto a editar
    setProductToEdit(null);
  };

  return (
    <div className="App">
      <h1>Mi Carrito de Compras</h1>
      {/* Renderizamos la lista de productos pasando las funciones necesarias como props */}
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onEditProduct={handleEditProduct}
      />
      {/* Renderizamos el carrito de compras pasando las funciones necesarias como props */}
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      {/* Si hay un producto seleccionado para editar, renderizamos el formulario de edición */}
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
