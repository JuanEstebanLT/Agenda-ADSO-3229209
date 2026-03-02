/*
// CLASE 4

import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    etiqueta: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault(); // evita recargar

    if (!form.nombre.trim() || !form.telefono.trim()) {
      alert("Completa al menos Nombre y Teléfono");
      return;
    }

    onAgregar(form); // App agrega id y actualiza la lista
    setForm({
      nombre: "",
      correo: "",
      telefono: "",
      etiqueta: "",
    }); // limpiar formulario
  };

  return (
    <form onSubmit={onSubmit} className="form-contacto">
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={onChange}
      />

      <input
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={onChange}
      />

      <input
        name="correo"
        placeholder="Correo"
        value={form.correo}
        onChange={onChange}
      />

      <input
        name="etiqueta"
        placeholder="Etiqueta (opcional)"
        value={form.etiqueta}
        onChange={onChange}
      />

      <button type="submit">Agregar contacto</button>
    </form>
  );
}


//CLASE 5 Y CLASE 6
import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.telefono || !form.correo) return;

    onAgregar(form);

    setForm({
      nombre: "",
      telefono: "",
      correo: "",
      etiqueta: "",
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded-lg p-5 flex flex-col gap-4 mb-6"
    >
      <label className="text-sm font-semibold">Nombre *</label>
      <input
        name="nombre"
        value={form.nombre}
        onChange={onChange}
        placeholder="Ej: Ana López"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-morado"
      />

      <label className="text-sm font-semibold">Teléfono *</label>
      <input
        name="telefono"
        value={form.telefono}
        onChange={onChange}
        className="border rounded-md p-2 focus:ring-2 focus:ring-morado"
      />

      <label className="text-sm font-semibold">Correo *</label>
      <input
        name="correo"
        value={form.correo}
        onChange={onChange}
        className="border rounded-md p-2 focus:ring-2 focus:ring-morado"
      />

      <label className="text-sm font-semibold">Etiqueta (opcional)</label>
      <input
        name="etiqueta"
        value={form.etiqueta}
        onChange={onChange}
        className="border rounded-md p-2 focus:ring-2 focus:ring-morado"
      />

      <button className="bg-morado hover:bg-morado-oscuro text-white py-2 rounded-md">
        Agregar contacto
      </button>
    </form>
  );
}
*/

// CLASE 7

import { useState } from "react";

export default function FormularioContacto({ onAgregar }) {
  // Estado del formulario como objeto único controlado
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  // onChange genérico: actualiza el campo según "name"
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // onSubmit: valida mínimos y llama al padre
  const onSubmit = (e) => {
    e.preventDefault(); // Evita recarga de la página

    // Validación mínima: 3 campos obligatorios
    if (!form.nombre || !form.telefono || !form.correo) return;

    // Llamamos la función del padre para crear
    onAgregar(form);

    // Reseteamos el formulario
    setForm({
      nombre: "",
      telefono: "",
      correo: "",
      etiqueta: "",
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Grid: 1 columna en móvil, 2 en pantallas medianas+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Campo: Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre *
          </label>
          <input
            className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            name="nombre"
            placeholder="Ej: Camila Pérez"
            value={form.nombre}
            onChange={onChange}
          />
        </div>

        {/* Campo: Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono *
          </label>
          <input
            className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
            name="telefono"
            placeholder="Ej: 300 123 4567"
            value={form.telefono}
            onChange={onChange}
          />
        </div>
      </div>

      {/* Campo: Correo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Correo *
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="correo"
          placeholder="Ej: camila@sena.edu.co"
          value={form.correo}
          onChange={onChange}
        />
      </div>

      {/* Campo: Etiqueta opcional */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Etiqueta (opcional)
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="etiqueta"
          placeholder="Ej: Trabajo"
          value={form.etiqueta}
          onChange={onChange}
        />
      </div>

      {/* Botón principal */}
      <button
        type="submit"
        className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm"
      >
        Agregar contacto
      </button>
    </form>
  );
}