// CLASE 1

/* 
export default function App() {
  const fecha = new Date().toLocaleString(); return (
  <main> 
    <h1>Hola soy Juan Esteban Lezcano Tejada estudiante del sena con numero de ficha 3229209</h1>
    <p>Me gustaria aprender a realizar frontend por medio de css y archivos jsx y saberlo subir a repositorios por medio de github</p>
  </main>
)}

// CLASE 3

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

// CLASE 4

// src/App.jsx

import { useState } from "react";
import "./App.css";
import ContactoCard from "./components/ContactoCard";
import FormularioContacto from "./components/FormularioContacto";

export default function App() {
  const [contactos, setContactos] = useState([
    {
      id: 1,
      nombre: "Carolina Pérez",
      telefono: "300 123 4567",
      correo: "carolina@sena.edu.co",
      etiqueta: "Compañera",
    },
  ]);

  // Agregar contacto
  const agregarContacto = (nuevo) => {
    setContactos((prev) => [
      ...prev,
      { id: Date.now(), ...nuevo },
    ]);
  };

  // Eliminar contacto
  const eliminarContacto = (id) => {
    setContactos((prev) =>
      prev.filter((c) => c.id !== id)
    );
  };

  return (
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO v2</h1>

      <FormularioContacto onAgregar={agregarContacto} />

      <section className="lista-contactos">
        {contactos.map((c) => (
          <ContactoCard
            key={c.id}
            id={c.id}
            nombre={c.nombre}
            telefono={c.telefono}
            correo={c.correo}
            etiqueta={c.etiqueta}
            onDelete={eliminarContacto}
          />
        ))}
      </section>
    </main>
  );
}

*/

// CLASE 5 Y CLASE 6
import { useState, useEffect } from "react";
import "./App.css";

import FormularioContacto from "./Components/FormularioContacto";
import ContactoCard from "./Components/ContactoCard";


export default function App() {
  // Cargar contactos desde localStorage
  const contactosGuardados =
    JSON.parse(localStorage.getItem("contactos")) || [];

  const [contactos, setContactos] = useState(contactosGuardados);

  // Guardar contactos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  // Agregar contacto
  const agregarContacto = (nuevoContacto) => {
    setContactos((prev) => [...prev, nuevoContacto]);
  };

  // Eliminar contacto por correo
  const eliminarContacto = (correo) => {
    setContactos((prev) =>
      prev.filter((contacto) => contacto.correo !== correo)
    );
  };

  return (
    <main className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold text-purple-600 text-center mb-2">
        Agenda ADSO v4
      </h1>
      <p className="text-gray-500 text-center mb-4">
        Interfaz moderna con TailwindCSS
      </p>
      <p className="text-gray-600 text-center mb-6">
        Pruebas sobre la implementación de Tailwind
      </p>

      <FormularioContacto onAgregar={agregarContacto}/>
      
      <div className="mt-6 space-y-4">
        {contactos.length === 0 ? (
          <p className="text-center text-gray-400">
            No hay contactos registrados
          </p>
        ) : (
          contactos.map((c) => (
            <ContactoCard
              key={c.correo}
              {...c}
              onEliminar={eliminarContacto}
            />
          ))
        )}
      </div>
    </main>
  );
}