import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useRefugio } from "../context/RefugioContext";

export default function CandidatoDetailPage() {
  const { id } = useParams();
  const { candidatos } = useRefugio();
  const candidato = candidatos.find((c) => String(c.id) === id);

  if (!candidato) {
    return (
      <Layout>
        <Link
         to="/candidatos"
         className="inline-block px-4 py-2 text-white rounded-lg shadow">
         Volver a candidatos
        </Link>
        <p className="text-center text-red-500 font-semibold">
          No se encontró el candidato.
        </p>
        <div className="flex justify-center mt-4">
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link
        to="/candidatos"
        className="inline-block px-4 py-2 text-white rounded-lg shadow">
        Volver a candidatos
      </Link>
      <div className="flex justify-center">
        <div className="max-w-md w-full bg-orange-200 shadow-lg p-6 rounded-2xl text-center">
          <h1 className="text-2xl font-bold mb-4">{candidato.nombre}</h1>
          <img
            src={candidato.imagen}
            alt={candidato.nombre}
            className="rounded-lg h-60 object-cover mx-auto mb-4"
            onError={(e) => {
              e.target.src = "/images/default.jpg";
            }}
          />
          <p className="mb-2">{candidato.descripcion}</p>
          <p className="text-gray-600">Edad: {candidato.edad} años</p>
          <p className="text-gray-600 mb-4">Especie: {candidato.especie}</p>

        </div>
      </div>
    </Layout>
  );
}
