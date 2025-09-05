import Layout from "../components/Layout";
import Card from "../components/Card";
import { useRefugio } from "../context/RefugioContext";

export default function CandidatosPage() {
  const { candidatos, toggleAdopcion } = useRefugio();

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Candidatos</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {candidatos.map(c => (
          <Card
            key={c.id}
            candidato={c}
            onToggle={toggleAdopcion}
            className="break-inside-avoid mb-4"
             />
        ))}
      </div>
    </Layout>
  );
}