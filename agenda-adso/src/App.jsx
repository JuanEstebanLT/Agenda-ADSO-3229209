// CLASE 1

export default function App() {
  const fecha = new Date().toLocaleString(); return (
  <main> 
    <h1>Hola soy Juan Esteban Lezcano Tejada estudiante del sena con numero de ficha 3229209</h1>
    <p>Me gustaria aprender a realizar frontend por medio de css y archivos jsx y saberlo subir a repositorios por medio de github</p>
  </main>
)}

/*
// src/App.jsx
// Este componente arma la pantalla completa y usa ContactoCard para cada persona.

import "./App.css"; // Importamos estilos de la app
import ContactoCard from "./Components/ContactoCard/"; // Importamos el componente hijo

export default function App() {
  // Esta es nuestra "base de datos" inicial quemada en el código
  const contactos = [
    {
      id: 1,
      nombre: "Carolina Pérez",
      telefono: "300 123 4567",
      correo: "carolina@sena.edu.co",
      etiqueta: "Compañera",
    },
    {
      id: 2,
      nombre: "Juan Díaz",
      telefono: "301 987 6543",
      correo: "juan@sena.edu.co",
      etiqueta: "Instructor",
    },
    {
      id: 3,
      nombre: "Luisa Martínez",
      telefono: "320 555 7788",
      correo: "luisa@sena.edu.co",
      etiqueta: "Cliente",
    },
    {
      id: 4,
      nombre: "Paul Docherty",
      telefono: "320 555 5588",
      correo: "doc@sena.edu.co",
      etiqueta: "Proveedor",
    },
    {
      id: 5,
      nombre: "Marleny Muñoz",
      telefono: "320 555 4422",
      correo: "luzma@sena.edu.co",
      etiqueta: "Coordinadora",
    },
  ];

  return (
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO</h1>
      <p className="app-subtitle">Contactos guardados</p>

      {/* Recorremos el arreglo contactos y pintamos una tarjeta por cada uno }
      {contactos.map((c) => (
        <ContactoCard
          key={c.id}        // key única para React
          nombre={c.nombre} // prop nombre
          telefono={c.telefono} // prop telefono
          correo={c.correo} // prop correo
          etiqueta={c.etiqueta} // prop etiqueta
        />
      ))}

      <p className="app-nota">
        (Versión 0.1 - solo lectura, sin agregar ni editar todavía)
      </p>
    </main>
  );
}
*/

