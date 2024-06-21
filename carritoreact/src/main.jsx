// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente App
import './index.css'; // Importa los estilos globales

// Crea el contenedor raíz y renderiza la aplicación App dentro del div con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
