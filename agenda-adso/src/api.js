/*
// Punto base de la API local (ajusta el puerto si usas otro)
const API = "http://localhost:3002/contactos";

// GET: listar contactos
export async function listarContactos() {
  // Hacemos un GET a /contactos
  const res = await fetch(API);

  // Si la respuesta no es OK (>=400), lanzamos error
  if (!res.ok) throw new Error("Error al listar contactos");

  // Parseamos JSON y lo retornamos (array de contactos)
  return res.json();
}

// POST: crear contacto
export async function crearContacto(data) {
  // Hacemos un POST a /contactos con body en JSON
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // Indicamos JSON
    body: JSON.stringify(data), // Enviamos el objeto del formulario
  });

  // Validamos respuesta
  if (!res.ok) throw new Error("Error al crear el contacto");

  // Devolvemos el contacto creado que regresa la API (con id)
  return res.json();
}

// DELETE: eliminar contacto por id
export async function eliminarContactoPorId(id) {
  // Hacemos un DELETE a /contactos/:id
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  // Validamos respuesta
  if (!res.ok) throw new Error("Error al eliminar el contacto");

  // Devolvemos true indicando éxito
  return true;
}
*/

// CLASE 9

// Archivo: src/api.js
// Capa de acceso a datos de Agenda ADSO (llamados a la API REST).

// Importamos la URL base desde config.js
import { API_BASE_URL } from "./config";

// Función GET: listar contactos
export async function listarContactos() {

  const res = await fetch(API_BASE_URL);

  if (!res.ok) throw new Error("Error al listar contactos");

  return res.json();
}

// Función POST: crear un nuevo contacto
export async function crearContacto(data) {

  const res = await fetch(API_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error al crear el contacto");

  return res.json();
}

// Función DELETE: eliminar contacto por id
export async function eliminarContactoPorId(id) {

  const res = await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });

  if (!res.ok) throw new Error("Error al eliminar el contacto");

  return true;
}