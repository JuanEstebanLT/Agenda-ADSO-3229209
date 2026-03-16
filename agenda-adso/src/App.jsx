// CLASE 1

/* 
export default function App() {
  const fecha = new Date().toLocaleString(); return (
  <main> 
    <h1>Hola soy Juan Esteban Lezcano Tejada estudiante del sena con numero de ficha 3229209</h1>
    <p>Me gustaria aprender a realizar frontend por medio de css y archivos jsx y saberlo subir a repositorios por medio de github</p>
  </main>
)}
*/

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

      {contactos.map((c) => (
        <ContactoCard
          key={c.id}
          nombre={c.nombre}
          telefono={c.telefono}
          correo={c.correo}
          etiqueta={c.etiqueta}
        />
      ))}

      <p className="app-nota">
        (Versión 0.1 - solo lectura, sin agregar ni editar todavía)
      </p>
    </main>
  );
}
*/

// CLASE 4

/*
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

/*
import { useEffect, useState } from "react";
import {
  listarContactos,
  crearContacto,
  eliminarContactoPorId,
} from "./api.js";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

export default function App() {
  // Estado principal
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // Cargar contactos (GET)
  useEffect(() => {
    async function cargarContactos() {
      try {
        const data = await listarContactos();
        setContactos(data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar la lista de contactos");
      } finally {
        setCargando(false);
      }
    }

    cargarContactos();
  }, []);

  // Agregar contacto (POST)
  const agregarContacto = async (nuevo) => {
    try {
      const creado = await crearContacto(nuevo);
      setContactos((prev) => [...prev, creado]);
    } catch (err) {
      console.error(err);
      setError("No se pudo agregar el contacto");
    }
  };

  // Eliminar contacto (DELETE)
  const eliminarContacto = async (id) => {
    try {
      await eliminarContactoPorId(id);
      setContactos((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
      setError("No se pudo eliminar el contacto");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="max-w-6xl mx-auto px-6 pt-8">
        <p className="text-sm font-semibold text-gray-400 tracking-[0.25em] uppercase">
          Programa ADSO
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
          Agenda ADSO v5
        </h1>
        <p className="text-gray-500 mt-1">
          Gestión de contactos conectada a una API local con JSON Server.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {error && (
          <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {cargando && (
          <div className="rounded-xl bg-purple-50 border border-purple-200 px-4 py-3 text-sm text-purple-700">
            Cargando contactos desde la API...
          </div>
        )}

        <FormularioContacto onAgregar={agregarContacto} />

        <div className="space-y-4">
          {contactos.length === 0 && !cargando && (
            <p className="text-gray-500 text-sm">
              No hay contactos aún. Agrega el primero usando el formulario.
            </p>
          )}

          {contactos.map((c) => (
            <ContactoCard
              key={c.id}
              {...c}
              onEliminar={() => eliminarContacto(c.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
*/



// CLASE 8

/*
import { useEffect, useState } from "react";
import { listarContactos, crearContacto, eliminarContactoPorId } from "./api";
import FormularioContacto from "./Components/FormularioContacto";
import ContactoCard from "./Components/ContactoCard";

function App() {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarContactos = async () => {
      try {
        setCargando(true);
        setError("");
        const data = await listarContactos();
        setContactos(data);
      } catch (error) {
        console.error("Error al cargar contactos:", error);
        setError(
          "No se pudieron cargar los contactos. Verifica que el servidor esté encendido e intenta de nuevo."
        );
      } finally {
        setCargando(false);
      }
    };

    cargarContactos();
  }, []);

  const onAgregarContacto = async (nuevoContacto) => {
    try {
      setError("");
      const creado = await crearContacto(nuevoContacto);
      setContactos((prev) => [...prev, creado]);
    } catch (error) {
      console.error("Error al crear contacto:", error);
      setError(
        "No se pudo guardar el contacto. Verifica tu conexión o el estado del servidor e intenta nuevamente."
      );
      throw error;
    }
  };

  const onEliminarContacto = async (id) => {
    try {
      setError("");
      await eliminarContactoPorId(id);
      setContactos((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
      setError(
        "No se pudo eliminar el contacto. Vuelve a intentarlo o verifica el servidor."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Desarrollo Web ReactJS Ficha 3229209
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            Agenda ADSO v6
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Gestión de contactos conectada a una API local con JSON Server,
            ahora con validaciones y mejor experiencia de usuario.
          </p>
        </header>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-sm font-medium text-red-700">{error}</p>
          </div>
        )}

        {cargando ? (
          <p className="text-sm text-gray-500">Cargando contactos...</p>
        ) : (
          <>
            <FormularioContacto onAgregar={onAgregarContacto} />

            <section className="space-y-4">
              {contactos.length === 0 ? (
                <p className="text-sm text-gray-500">
                  Aún no tienes contactos registrados. Agrega el primero usando
                  el formulario superior.
                </p>
              ) : (
                contactos.map((c) => (
                  <ContactoCard
                    key={c.id}
                    nombre={c.nombre}
                    telefono={c.telefono}
                    correo={c.correo}
                    etiqueta={c.etiqueta}
                    onEliminar={() => onEliminarContacto(c.id)}
                  />
                ))
              )}
            </section>
          </>
        )}

        <footer className="mt-8 text-xs text-gray-400">
          <p>Desarrollo Web - ReactJS | Proyecto Agenda ADSO</p>
          <p>Instructor: Gustavo Adolfo Bolaños Dorado</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
*/


// CLASE 9

/*
// Archivo: src/App.jsx

import { useEffect, useState } from "react";

import {
  listarContactos,
  crearContacto,
  eliminarContactoPorId,
} from "./api";

import { APP_INFO } from "./config";

import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

function App() {

  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const cargarContactos = async () => {
      try {

        setCargando(true);
        setError("");

        const data = await listarContactos();
        setContactos(data);

      } catch (error) {

        console.error("Error al cargar contactos:", error);

        setError(
          "No se pudieron cargar los contactos. Verifica que el servidor esté encendido e intenta de nuevo."
        );

      } finally {
        setCargando(false);
      }
    };

    cargarContactos();

  }, []);

  const onAgregarContacto = async (nuevoContacto) => {
    try {

      setError("");

      const creado = await crearContacto(nuevoContacto);

      setContactos((prev) => [...prev, creado]);

    } catch (error) {

      console.error("Error al crear contacto:", error);

      setError(
        "No se pudo guardar el contacto. Verifica tu conexión o el estado del servidor e intenta nuevamente."
      );

      throw error;
    }
  };

  const onEliminarContacto = async (id) => {
    try {

      setError("");
      await eliminarContactoPorId(id);

      setContactos((prev) => prev.filter((c) => c.id !== id));

    } catch (error) {

      console.error("Error al eliminar contacto:", error);

      setError(
        "No se pudo eliminar el contacto. Vuelve a intentarlo o verifica el servidor."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-4xl mx-auto px-4 py-8">

        <header className="mb-8">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Desarrollo Web ReactJS Ficha {APP_INFO.ficha}
          </p>

          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            {APP_INFO.titulo}
          </h1>

          <p className="text-sm text-gray-600 mt-1">
            {APP_INFO.subtitulo}
          </p>
        </header>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-sm font-medium text-red-700">{error}</p>
          </div>
        )}

        {cargando ? (
          <p className="text-sm text-gray-500">Cargando contactos...</p>
        ) : (
          <>
            <FormularioContacto onAgregar={onAgregarContacto} />

            <section className="space-y-4">
              {contactos.length === 0 ? (
                <p className="text-sm text-gray-500">
                  Aún no tienes contactos registrados.
                </p>
              ) : (
                contactos.map((c) => (
                  <ContactoCard
                    key={c.id}
                    nombre={c.nombre}
                    telefono={c.telefono}
                    correo={c.correo}
                    etiqueta={c.etiqueta}
                    onEliminar={() => onEliminarContacto(c.id)}
                  />
                ))
              )}
            </section>
          </>
        )}

        <footer className="mt-8 text-xs text-gray-400">
          <p>Desarrollo Web - ReactJS | Proyecto Agenda ADSO</p>
          <p>Instructor: Gustavo Adolfo Bolaños Dorado</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
*/


// CLASE 10

/*
// Archivo: src/App.jsx

import { useEffect, useState } from "react";

import {
  listarContactos,
  crearContacto,
  eliminarContactoPorId,
} from "./api";

import { APP_INFO } from "./config";

import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

function App() {

  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // CLASE 10: Estados para búsqueda y ordenamiento
  const [busqueda, setBusqueda] = useState("");
  const [ordenAsc, setOrdenAsc] = useState(true);

  useEffect(() => {

    const cargarContactos = async () => {
      try {

        setCargando(true);
        setError("");

        const data = await listarContactos();
        setContactos(data);

      } catch (error) {

        console.error("Error al cargar contactos:", error);

        setError(
          "No se pudieron cargar los contactos. Verifica que el servidor esté encendido e intenta de nuevo."
        );

      } finally {
        setCargando(false);
      }
    };

    cargarContactos();

  }, []);

  const onAgregarContacto = async (nuevoContacto) => {
    try {

      setError("");

      const creado = await crearContacto(nuevoContacto);

      setContactos((prev) => [...prev, creado]);

    } catch (error) {

      console.error("Error al crear contacto:", error);

      setError(
        "No se pudo guardar el contacto. Verifica tu conexión o el estado del servidor e intenta nuevamente."
      );

      throw error;
    }
  };

  const onEliminarContacto = async (id) => {
    try {

      setError("");
      await eliminarContactoPorId(id);

      setContactos((prev) => prev.filter((c) => c.id !== id));

    } catch (error) {

      console.error("Error al eliminar contacto:", error);

      setError(
        "No se pudo eliminar el contacto. Vuelve a intentarlo o verifica el servidor."
      );
    }
  };

  // CLASE 10: Primera transformación — filtrar por término de búsqueda
  const contactosFiltrados = contactos.filter((c) => {
    const termino = busqueda.toLowerCase();

    const nombre   = c.nombre.toLowerCase();
    const correo   = c.correo.toLowerCase();
    const etiqueta = (c.etiqueta || "").toLowerCase();
    const telefono = (c.telefono || "").toLowerCase(); // Mini reto 1

    return (
      nombre.includes(termino) ||
      correo.includes(termino) ||
      etiqueta.includes(termino) ||
      telefono.includes(termino) // Mini reto 1
    );
  });

  // CLASE 10: Segunda transformación — ordenar alfabéticamente
  const contactosOrdenados = [...contactosFiltrados].sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();

    if (nombreA < nombreB) return ordenAsc ? -1 : 1;
    if (nombreA > nombreB) return ordenAsc ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-4xl mx-auto px-4 py-8">

        <header className="mb-8">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Desarrollo Web ReactJS Ficha {APP_INFO.ficha}
          </p>

          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            {APP_INFO.titulo}
          </h1>

          <p className="text-sm text-gray-600 mt-1">
            {APP_INFO.subtitulo}
          </p>
        </header>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-sm font-medium text-red-700">{error}</p>
          </div>
        )}

        {cargando ? (
          <p className="text-sm text-gray-500">Cargando contactos...</p>
        ) : (
          <>
            <FormularioContacto onAgregar={onAgregarContacto} />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
              <input
                type="text"
                className="w-full md:flex-1 rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Buscar por nombre, correo, etiqueta o teléfono..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setOrdenAsc((prev) => !prev)}
                className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-200"
              >
                {ordenAsc ? "Ordenar Z-A" : "Ordenar A-Z"}
              </button>
            </div>

            <p className="text-xs text-gray-400 mb-3">
              Mostrando {contactosOrdenados.length}{" "}
              {contactosOrdenados.length === 1 ? "contacto" : "contactos"}
            </p>

            <section className="space-y-4">
              {contactosOrdenados.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No se encontraron contactos que coincidan con la búsqueda.
                </p>
              ) : (
                contactosOrdenados.map((c) => (
                  <ContactoCard
                    key={c.id}
                    nombre={c.nombre}
                    telefono={c.telefono}
                    correo={c.correo}
                    etiqueta={c.etiqueta}
                    onEliminar={() => onEliminarContacto(c.id)}
                  />
                ))
              )}
            </section>
          </>
        )}

        <footer className="mt-8 text-xs text-gray-400">
          <p>Desarrollo Web - ReactJS | Proyecto Agenda ADSO</p>
          <p>Instructor: Gustavo Adolfo Bolaños Dorado</p>
        </footer>

      </div>
    </div>
  );
}

export default App;


// CLASE 11

// Archivo: src/App.jsx
// Componente principal de la aplicación Agenda ADSO.

import { useEffect, useState } from "react";
import {
  listarContactos,
  crearContacto,
  actualizarContacto,
  eliminarContactoPorId,
} from "./api";
import { APP_INFO } from "./config";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

function App() {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [ordenAsc, setOrdenAsc] = useState(true);
  const [contactoEnEdicion, setContactoEnEdicion] = useState(null);

  useEffect(() => {
    const cargarContactos = async () => {
      try {
        setCargando(true);
        setError("");
        const data = await listarContactos();
        setContactos(data);
      } catch (error) {
        console.error("Error al cargar contactos:", error);
        setError(
          "No se pudieron cargar los contactos. Verifica que el servidor esté encendido e intenta de nuevo."
        );
      } finally {
        setCargando(false);
      }
    };
    cargarContactos();
  }, []);

  const onAgregarContacto = async (nuevoContacto) => {
    try {
      setError("");
      const creado = await crearContacto(nuevoContacto);
      setContactos((prev) => [...prev, creado]);
    } catch (error) {
      console.error("Error al crear contacto:", error);
      setError(
        "No se pudo guardar el contacto. Verifica tu conexión o el estado del servidor e intenta nuevamente."
      );
      throw error;
    }
  };

  const onActualizarContacto = async (contactoActualizado) => {
    try {
      setError("");
      const actualizado = await actualizarContacto(
        contactoActualizado.id,
        contactoActualizado
      );
      setContactos((prev) =>
        prev.map((c) => (c.id === actualizado.id ? actualizado : c))
      );
      setContactoEnEdicion(null);
    } catch (error) {
      console.error("Error al actualizar contacto:", error);
      setError(
        "No se pudo actualizar el contacto. Verifica tu conexión o el servidor e intenta nuevamente."
      );
      throw error;
    }
  };

  const onEliminarContacto = async (id) => {
    try {
      setError("");
      await eliminarContactoPorId(id);
      setContactos((prev) => prev.filter((c) => c.id !== id));
      setContactoEnEdicion((actual) =>
        actual && actual.id === id ? null : actual
      );
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
      setError(
        "No se pudo eliminar el contacto. Vuelve a intentarlo o verifica el servidor."
      );
    }
  };

  const onEditarClick = (contacto) => {
    setContactoEnEdicion(contacto);
    setError("");
  };

  const onCancelarEdicion = () => {
    setContactoEnEdicion(null);
  };

  const contactosFiltrados = contactos.filter((c) => {
    const termino = busqueda.toLowerCase();
    const nombre = c.nombre.toLowerCase();
    const correo = c.correo.toLowerCase();
    const etiqueta = (c.etiqueta || "").toLowerCase();
    return (
      nombre.includes(termino) ||
      correo.includes(termino) ||
      etiqueta.includes(termino)
    );
  });

  const contactosOrdenados = [...contactosFiltrados].sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    if (nombreA < nombreB) return ordenAsc ? -1 : 1;
    if (nombreA > nombreB) return ordenAsc ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Desarrollo Web ReactJS Ficha {APP_INFO.ficha}
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2">
            {APP_INFO.titulo}
          </h1>
          <p className="text-sm text-gray-600 mt-1">{APP_INFO.subtitulo}</p>
        </header>

        {error && (
          <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-sm font-medium text-red-700">{error}</p>
          </div>
        )}

        {cargando ? (
          <p className="text-sm text-gray-500">Cargando contactos...</p>
        ) : (
          <>
            <FormularioContacto
              onAgregar={onAgregarContacto}
              onActualizar={onActualizarContacto}
              contactoEnEdicion={contactoEnEdicion}
              onCancelarEdicion={onCancelarEdicion}
            />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
              <input
                type="text"
                className="w-full md:flex-1 rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Buscar por nombre, correo o etiqueta..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setOrdenAsc((prev) => !prev)}
                className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-200"
              >
                {ordenAsc ? "Ordenar Z-A" : "Ordenar A-Z"}
              </button>
            </div>

            <section className="space-y-4">
              {contactosOrdenados.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No se encontraron contactos que coincidan con la búsqueda.
                </p>
              ) : (
                contactosOrdenados.map((c) => (
                  <ContactoCard
                    key={c.id}
                    nombre={c.nombre}
                    telefono={c.telefono}
                    correo={c.correo}
                    etiqueta={c.etiqueta}
                    onEliminar={() => onEliminarContacto(c.id)}
                    onEditar={() => onEditarClick(c)}
                  />
                ))
              )}
            </section>
          </>
        )}

        <footer className="mt-8 text-xs text-gray-400">
          <p>Desarrollo Web -- ReactJS | Proyecto Agenda ADSO</p>
          <p>Instructor: Gustavo Adolfo Bolaños Dorado</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
*/

// CLASE 11B

// Archivo: src/App.jsx
// Versión PRO de la Agenda ADSO con dos vistas:
// - Vista "crear": solo formulario para crear contactos.
// - Vista "contactos": listado, búsqueda, ordenamiento, edición y eliminación.
//
// NO se usa React Router, solo un estado de vista.

import { useEffect, useState } from "react";
import {
  listarContactos,
  crearContacto,
  actualizarContacto,
  eliminarContactoPorId,
} from "./api";
import { APP_INFO } from "./config";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

function App() {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [ordenAsc, setOrdenAsc] = useState(true);
  const [contactoEnEdicion, setContactoEnEdicion] = useState(null);
  // NUEVO: estado de la vista actual ("crear" o "contactos")
  const [vista, setVista] = useState("crear");

  useEffect(() => {
    const cargarContactos = async () => {
      try {
        setCargando(true);
        setError("");
        const data = await listarContactos();
        setContactos(data);
      } catch (error) {
        console.error("Error al cargar contactos:", error);
        setError(
          "No se pudieron cargar los contactos. Verifica que el servidor esté encendido e intenta de nuevo."
        );
      } finally {
        setCargando(false);
      }
    };
    cargarContactos();
  }, []);

  // Crear contacto (CREATE)
  const onAgregarContacto = async (nuevoContacto) => {
    try {
      setError("");
      const creado = await crearContacto(nuevoContacto);
      setContactos((prev) => [...prev, creado]);
    } catch (error) {
      console.error("Error al crear contacto:", error);
      setError(
        "No se pudo guardar el contacto. Verifica tu conexión o el estado del servidor e intenta nuevamente."
      );
      throw error;
    }
  };

  // Actualizar contacto (UPDATE)
  const onActualizarContacto = async (contactoActualizado) => {
    try {
      setError("");
      const actualizado = await actualizarContacto(
        contactoActualizado.id,
        contactoActualizado
      );
      setContactos((prev) =>
        prev.map((c) => (c.id === actualizado.id ? actualizado : c))
      );
      setContactoEnEdicion(null);
    } catch (error) {
      console.error("Error al actualizar contacto:", error);
      setError(
        "No se pudo actualizar el contacto. Verifica tu conexión o el servidor e intenta nuevamente."
      );
      throw error;
    }
  };

  // Eliminar contacto (DELETE)
  const onEliminarContacto = async (id) => {
    try {
      setError("");
      await eliminarContactoPorId(id);
      setContactos((prev) => prev.filter((c) => c.id !== id));
      setContactoEnEdicion((actual) =>
        actual && actual.id === id ? null : actual
      );
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
      setError(
        "No se pudo eliminar el contacto. Vuelve a intentarlo o verifica el servidor."
      );
    }
  };

  const onEditarClick = (contacto) => {
    setContactoEnEdicion(contacto);
    setError("");
  };

  const onCancelarEdicion = () => {
    setContactoEnEdicion(null);
  };

  const irAVerContactos = () => {
    setVista("contactos");
    setContactoEnEdicion(null);
  };

  const irACrearContacto = () => {
    setVista("crear");
    setContactoEnEdicion(null);
    setBusqueda("");
  };

  // Filtrado por búsqueda
  const contactosFiltrados = contactos.filter((c) => {
    const termino = busqueda.toLowerCase();
    const nombre = c.nombre.toLowerCase();
    const correo = c.correo.toLowerCase();
    const etiqueta = (c.etiqueta || "").toLowerCase();
    return (
      nombre.includes(termino) ||
      correo.includes(termino) ||
      etiqueta.includes(termino)
    );
  });

  // Ordenamiento A-Z / Z-A
  const contactosOrdenados = [...contactosFiltrados].sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    if (nombreA < nombreB) return ordenAsc ? -1 : 1;
    if (nombreA > nombreB) return ordenAsc ? 1 : -1;
    return 0;
  });

  const estaEnVistaCrear = vista === "crear";
  const estaEnVistaContactos = vista === "contactos";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      {/* Barra superior */}
      <header className="border-b border-slate-800 bg-slate-950/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-purple-600 flex items-center justify-center text-white text-lg font-bold shadow-md">
              A
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Proyecto ABP
              </p>
              <h1 className="text-sm md:text-base font-semibold text-slate-50">
                Agenda ADSO – ReactJS
              </h1>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
              SENA CTMA
            </p>
            <p className="text-xs text-slate-200">Ficha {APP_INFO.ficha}</p>
          </div>
        </div>
      </header>

      {/* Contenido principal en grid 2 columnas */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-10 pb-14">
        <div className="grid gap-8 md:grid-cols-[1.6fr,1fr] items-start">

          {/* COLUMNA IZQUIERDA */}
          <div className="bg-white/95 rounded-3xl shadow-2xl border border-slate-100 px-6 py-7 md:px-8 md:py-8">
            <header className="mb-5 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  {APP_INFO.titulo}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{APP_INFO.subtitulo}</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 border border-purple-100">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium text-purple-800">
                    JSON Server conectado · {contactos.length} contacto
                    {contactos.length !== 1 && "s"}
                  </span>
                </div>
              </div>

              {/* Botón para cambiar de vista */}
              <div className="flex flex-col items-end gap-2">
                <span className="text-[11px] uppercase tracking-[0.16em] text-gray-400">
                  {estaEnVistaCrear ? "Modo creación" : "Modo contactos"}
                </span>
                {estaEnVistaCrear ? (
                  <button
                    type="button"
                    onClick={irAVerContactos}
                    className="text-xs md:text-sm px-4 py-2 rounded-xl border border-purple-200 text-purple-700 hover:bg-purple-50"
                  >
                    Ver contactos
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={irACrearContacto}
                    className="text-xs md:text-sm px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100"
                  >
                    Volver a crear contacto
                  </button>
                )}
              </div>
            </header>

            {/* Error global */}
            {error && (
              <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
                <p className="text-sm font-medium text-red-700">{error}</p>
              </div>
            )}

            {/* Contenido según la vista */}
            {cargando ? (
              <p className="text-sm text-gray-500">Cargando contactos...</p>
            ) : (
              <>
                {/* VISTA CREAR */}
                {estaEnVistaCrear && (
                  <FormularioContacto
                    onAgregar={onAgregarContacto}
                    onActualizar={onActualizarContacto}
                    contactoEnEdicion={null}
                    onCancelarEdicion={onCancelarEdicion}
                  />
                )}

                {/* VISTA CONTACTOS */}
                {estaEnVistaContactos && (
                  <>
                    {contactoEnEdicion && (
                      <div className="mb-4">
                        <FormularioContacto
                          onAgregar={onAgregarContacto}
                          onActualizar={onActualizarContacto}
                          contactoEnEdicion={contactoEnEdicion}
                          onCancelarEdicion={onCancelarEdicion}
                        />
                      </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm"
                          placeholder="Buscar por nombre, correo o etiqueta..."
                          value={busqueda}
                          onChange={(e) => setBusqueda(e.target.value)}
                        />
                        <p className="mt-1 text-[11px] text-gray-500">
                          Mostrando {contactosOrdenados.length} de{" "}
                          {contactos.length} contacto
                          {contactos.length !== 1 && "s"}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setOrdenAsc((prev) => !prev)}
                        className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-200 whitespace-nowrap"
                      >
                        {ordenAsc ? "Ordenar Z-A" : "Ordenar A-Z"}
                      </button>
                    </div>

                    <section className="space-y-3 md:space-y-4">
                      {contactosOrdenados.length === 0 ? (
                        <p className="text-sm text-gray-500">
                          No se encontraron contactos que coincidan con la búsqueda.
                        </p>
                      ) : (
                        contactosOrdenados.map((c) => (
                          <ContactoCard
                            key={c.id}
                            nombre={c.nombre}
                            telefono={c.telefono}
                            correo={c.correo}
                            etiqueta={c.etiqueta}
                            onEliminar={() => onEliminarContacto(c.id)}
                            onEditar={() => onEditarClick(c)}
                          />
                        ))
                      )}
                    </section>
                  </>
                )}
              </>
            )}
          </div>

          {/* COLUMNA DERECHA: Panel lateral */}
          <aside className="space-y-4 md:space-y-5">
            {/* Banner morado */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 shadow-xl flex flex-col justify-between min-h-[220px]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-purple-100/80">
                  Proyecto ABP
                </p>
                <h2 className="text-lg font-bold mt-2">Agenda ADSO – Dashboard</h2>
                <p className="text-sm text-purple-100 mt-1">
                  CRUD completo con React, JSON Server, validaciones, búsqueda,
                  ordenamiento y edición.
                </p>
              </div>
              <div className="mt-6 space-y-2 text-sm">
                <p className="flex items-center justify-between">
                  <span className="text-purple-100">Contactos registrados</span>
                  <span className="font-semibold text-white text-base">
                    {contactos.length}
                  </span>
                </p>
                <p className="text-[11px] text-purple-100/80">
                  Usa este proyecto como evidencia en tu portafolio de
                  Desarrollo Web – ReactJS.
                </p>
              </div>
            </div>

            {/* Tips */}
            <div className="rounded-2xl bg-white/90 border border-slate-100 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">Tips de código limpio</h3>
              <ul className="mt-2 text-xs text-gray-600 space-y-1">
                <li>• Nombra componentes según su responsabilidad.</li>
                <li>• Evita duplicar lógica, extrae funciones reutilizables.</li>
                <li>• Comenta la intención, no cada línea obvia.</li>
                <li>• Mantén archivos pequeños y coherentes.</li>
              </ul>
            </div>

            {/* Tarjeta SENA */}
            <div className="rounded-2xl bg-slate-900 border border-slate-700 p-4 text-slate-100 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                SENA CTMA · ADSO
              </p>
              <p className="text-sm font-semibold mt-2">Desarrollo Web – ReactJS</p>
              <p className="text-xs text-slate-400 mt-3">
                "Pequeños proyectos bien cuidados valen más que mil ideas sin
                código. Agenda ADSO es tu carta de presentación como desarrollador."
              </p>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

export default App;