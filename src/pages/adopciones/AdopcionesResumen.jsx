import { useRefugio } from "../../context/RefugioContext";

export default function AdopcionesResumen() {
  const { candidatos } = useRefugio();
  const adoptados = candidatos.filter((c) => c.adoptado);

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh]">
      <div className="bg-orange-200 shadow-xl rounded-xl p-8 w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-6 text-refugio-azul">
          Resumen de Adopciones 🐾
        </h2>
        <div className="space-y-3 text-lg text-gray-700">
          <p>
            <span className="font-semibold">Total candidatos:</span>{" "}
            {candidatos.length}
          </p>
          <p>
            <span className="font-semibold">Adoptados:</span> {adoptados.length}
          </p>
          <p>
            <span className="font-semibold">Disponibles:</span>{" "}
            {candidatos.length - adoptados.length}
          </p>
        </div>
      </div>
    </div>
  );
}
