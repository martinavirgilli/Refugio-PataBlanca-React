import { Link, Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-black-100">
      {/* Header */}
      <header className="bg-refugio-azul text-black px-6 py-4 flex items-center justify-between shadow">
        <h1 className="text-xl font-bold">Refugio Pata Blanca</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
          <Link to="/candidatos" className="hover:underline">
            Candidatos
          </Link>
          <Link to="/nuevo" className="hover:underline">
            Nuevo Candidato
          </Link>
          <Link to="/adopciones" className="hover:underline">
            Adopciones
          </Link>
        </nav>
      </header>

      {/* Principal */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full h-full">
          {children || <Outlet />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-refugio-azul text-black text-center py-4 text-sm">
        © 2025 Refugio Pata Blanca - Todos los derechos reservados
      </footer>
    </div>
  );
}
