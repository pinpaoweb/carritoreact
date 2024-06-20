import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [linea1, setLinea1] = useState("dakapinamorxx");
  const [linea2, setLinea2] = useState("missrepapapa");
  const [selectedImage, setSelectedImage] = useState("");

  const nombre = "Pedro";
  const saludo = <p> hola mundo soy {nombre}<br /> </p>;

  const handleLinea1Change = (event) => {
    setLinea1(event.target.value);
  };

  const handleLinea2Change = (event) => {
    setLinea2(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const handleExport = () => {
    // Lógica para exportar
    console.log("Exportar imagen con líneas:", linea1, linea2, "y imagen:", selectedImage);
  };

  const imageMap = {
    "casa-llamas": "/incendio.jpg",
    "futurama": "/futurama.jpeg",
    "history-channel": "/history_channel.jpeg",
    "matrix": "/matrix.jpeg",
    "philosoraptor": "/philrosoraptor.jpeg"
  };

  return (
    <div className="App">
      {saludo}

      <select onChange={handleSelectChange}>
        <option value="">Selecciona una imagen</option>
        <option value="casa-llamas">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history-channel">History channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
      </select> <br />

      {/* Input text - primera linea */}
      <input type="text" placeholder="linea 1" value={linea1} onChange={handleLinea1Change} /> <br />

      {/* Input text - segunda linea */}
      <input type="text" placeholder="linea 2" value={linea2} onChange={handleLinea2Change} /> <br />

      {/* Boton exportar */}
      <button onClick={handleExport}>Exportar</button>
      <div>
        <span>{linea1}</span>
        <br />
        <span>{linea2}</span>
        <br />
        {selectedImage && <img src={imageMap[selectedImage]} alt="Selected" />}
      </div>
    </div>
  );
}

export default App;
