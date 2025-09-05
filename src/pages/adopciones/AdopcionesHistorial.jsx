import { useRefugio } from "../../context/RefugioContext";

export default function AdopcionesHistorial() {
  const { candidatos } = useRefugio();
  const adoptados = candidatos.filter((c) => c.adoptado);

  if (adoptados.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <p className="text-gray-600 text-lg">
          🐾 No hay adopciones registradas todavia.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh]">
      <div className="bg-orange-200 shadow-xl rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-refugio-azul">
          Historial de Adopciones
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          {adoptados.map((c) => (
            <li
              key={c.id}
              className="bg-gray-100 rounded-lg px-4 py-2 shadow-sm flex justify-between items-center">
              <span className="font-medium">{c.nombre}</span>
              <span className="text-sm text-blue-500 italic">
                {c.especie}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
