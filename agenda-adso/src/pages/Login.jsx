import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === "admin@sena.com" && password === "1234") {
      login()
      navigate("/")
    } else {
      setError("Correo o contraseña incorrectos")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Logo / encabezado */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-14 w-14 rounded-2xl bg-purple-600 flex items-center justify-center text-white text-2xl font-black shadow-lg mb-4">
            A
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            SENA CTMA · ADSO
          </p>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            Agenda ADSO
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Inicia sesión para continuar
          </p>
        </div>

        {/* Tarjeta del formulario */}
        <div className="bg-white/95 rounded-3xl shadow-2xl px-8 py-8">

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
              <p className="text-sm font-medium text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Campo correo */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="admin@sena.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError("")
                }}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Campo contraseña */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError("")
                }}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl text-sm transition-colors shadow-md"
            >
              Iniciar sesión
            </button>

          </form>

        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-slate-500 mt-6">
          Desarrollo Web – ReactJS · Instructor: Gustavo Bolaños
        </p>

      </div>
    </div>
  )
}