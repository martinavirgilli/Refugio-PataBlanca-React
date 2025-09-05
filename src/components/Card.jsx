import Button from "./Button";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import { useRefugio } from "../context/RefugioContext";

export default function Card({ candidato, onToggle, className }) {
  const { removeCandidato } = useRefugio(); // funcion contexto

  return (
  <div className="bg-orange-200 rounded-xl shadow-md hover:shadow-lg transition p-3 flex flex-col items-center break-inside-avoid mb-4">
    <div className="w-full overflow-hidden rounded-lg mb-2">
      <img
        src={candidato.imagen}
        alt={candidato.nombre}
        className="w-full h-auto object-contain"
      />
    </div>
    <h2 className="text-lg font-bold text-gray-800">{candidato.nombre}</h2>
    <p className="text-sm text-black text-center mb-2">{candidato.descripcion}</p>
    <Badge text={candidato.especie} />
    <div className="mt-2 flex gap-1 flex-wrap justify-center">
      <Link to={`/candidatos/${candidato.id}`}>
        <Button size="sm">Ver detalle</Button>
      </Link>
      <Button size="sm" onClick={() => onToggle(candidato.id)}>
        {candidato.adoptado ? "Revertir" : "Adoptar"}
      </Button>
      <Button
        size="sm"
        onClick={() => {
          if (window.confirm(`¿Seguro que quieres eliminar a ${candidato.nombre}?`)) {
            removeCandidato(candidato.id);
          }
        }}>
        Eliminar
      </Button>
    </div>
  </div>
  );
}
