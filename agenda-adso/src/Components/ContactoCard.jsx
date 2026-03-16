// CLASE 3

/*
// ContactoCard.jsx
// Este componente muestra UN contacto de la agenda.
// Recibe datos (props): nombre, telefono, correo, etiqueta.

export default function ContactoCard({ nombre, telefono, correo, etiqueta }) {
    return (
      <div className="card-contacto">
        {/* Nombre del contacto en negrita }
        <h3 className="card-nombre">{nombre}</h3>

        {/* Teléfono }
        <p className="card-linea">📞 {telefono}</p>

        {/* Correo }
        <p className="card-linea">📧 {correo}</p>

        {/* Etiqueta adicional, si existe }
        {etiqueta && (
          <p className="card-etiqueta">{etiqueta}</p>
        )}
      </div>
    );
  }


// CLASE 4

export default function ContactoCard({
  id,
  nombre,
  telefono,
  correo,
  etiqueta,
  onDelete,
}) {
  return (
    <article className="tarjeta-contacto">
      <h3>{nombre}</h3>

      {etiqueta && <p className="tag">{etiqueta}</p>}

      <p>📞 {telefono}</p>

      {correo && <p>✉️ {correo}</p>}

      <div className="acciones">
        <button
          type="button"
          className="btn-eliminar"
          onClick={() => onDelete(id)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}
 

// CLASE 5 Y CLASE 6

export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  onEliminar,
}) {
  return (
    <article className="tarjeta-contacto">
      <h3>{nombre}</h3>

      <p>📞 {telefono}</p>
      <p>✉️ {correo}</p>

      {etiqueta && <p>{etiqueta}</p>}

      <div className="acciones">
        <button
          className="btn-eliminar"
          onClick={() => onEliminar(correo)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}


// CLASE 7

// Este componente muestra un contacto individual.
// Incluye nombre, teléfono, correo, etiqueta y el botón de eliminar.

export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  onEliminar,
}) {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-6 flex items-start justify-between">
      {/* Información del contacto }
      <div className="space-y-1">
        {/* Nombre }
        <h3 className="text-xl font-semibold text-gray-800">
          {nombre}
        </h3>

        {/* Teléfono }
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-purple-500 text-lg">📞</span>
          {telefono}
        </p>

        {/* Correo }
        <p className="text-gray-600 text-sm flex items-center gap-2">
          <span className="text-purple-500 text-lg">✉️</span>
          {correo}
        </p>

        {/* Etiqueta (si existe) }
        {etiqueta && (
          <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mt-2">
            {etiqueta}
          </span>
        )}
      </div>

      {/* Botón de eliminar }
      <button
        onClick={onEliminar}
        className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow transition"
      >
        Eliminar
      </button>
    </div>
  );
}
*/

// CLASE 11

// Archivo: src/components/ContactoCard.jsx
// Componente que muestra la información de un contacto en una tarjeta.
// Incluye botones para Editar y Eliminar.

function ContactoCard({ nombre, telefono, correo, etiqueta, onEliminar, onEditar }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div>
        <h3 className="text-base font-semibold text-gray-900">{nombre}</h3>
        <p className="text-sm text-gray-600">Tel: {telefono}</p>
        <p className="text-sm text-gray-600">Correo: {correo}</p>
        {etiqueta && (
          <span className="inline-flex mt-1 px-2 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
            {etiqueta}
          </span>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onEditar}
          className="text-xs md:text-sm px-3 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={onEliminar}
          className="text-xs md:text-sm px-3 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default ContactoCard;




