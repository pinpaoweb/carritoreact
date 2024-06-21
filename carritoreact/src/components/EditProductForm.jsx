// src/components/EditProductForm.jsx

// Importamos React y el hook useState
import React, { useState } from 'react';

// Definimos el componente EditProductForm, que recibe las props `product` y `onUpdateProduct`
function EditProductForm({ product, onUpdateProduct }) {
  // Definimos los estados locales para los campos del formulario
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);

  // Manejador del evento de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamamos a la función onUpdateProduct pasando el producto actualizado
    onUpdateProduct({ ...product, name, price, image });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-product-form">
      <h2>Editar Producto</h2>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Actualizamos el estado name
        />
      </div>
      <div>
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))} // Actualizamos el estado price
        />
      </div>
      <div>
        <label htmlFor="image">Imagen:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)} // Actualizamos el estado image
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}

// Exportamos el componente EditProductForm para su uso en otros archivos
export default EditProductForm;
