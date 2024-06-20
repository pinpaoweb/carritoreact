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
    <form onSubmit={handleSubmit}>
      <h2>Editar Producto</h2>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Precio:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Imagen URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <button type="submit">Actualizar</button>
    </form>
  );
}

export default EditProductForm;
