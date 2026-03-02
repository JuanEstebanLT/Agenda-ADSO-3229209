/*
// src/main.jsx
// Este archivo conecta React con el HTML real.

import React from "react"; // React: la librería principal
import ReactDOM from "react-dom/client"; // ReactDOM: dibuja React en el navegador
import App from "./App.jsx"; // Importamos el componente raíz (nuestra Agenda ADSO)
import "./index.css"; // Importamos los estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* Aquí montamos nuestra Agenda ADSO }
  </React.StrictMode>
);
*/

// CLASE 7

import React from "react";
import ReactDOM from "react-dom/client";

// Importamos el componente raíz
import App from "./App.jsx";

// Importante: trae Tailwind a la app
import "./index.css";

// Punto de entrada de la app: renderiza <App /> dentro de #root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);