// src/components/EditProductForm.jsx

import React, { useState } from 'react';

function EditProductForm({ product, onUpdateProduct }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="image">Imagen:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default EditProductForm;
