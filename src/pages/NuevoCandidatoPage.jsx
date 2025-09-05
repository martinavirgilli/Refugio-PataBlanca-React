import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import { useRefugio } from "../context/RefugioContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NuevoCandidatoPage() {
  const { addCandidato } = useRefugio();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    especie: "",
    edad: "",
    descripcion: "",
    imagen: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addCandidato({ ...form, adoptado: false });
    navigate("/candidatos");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Registrar Nuevo Candidato
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-orange-200 shadow-lg rounded-xl p-6 space-y-4"
        >
          <Input
            label="Nombre"
            value={form.nombre}
            onChange={handleChange}
            name="nombre"
          />
          <Input
            label="Especie"
            value={form.especie}
            onChange={handleChange}
            name="especie"
          />
          <Input
            label="Edad"
            type="number"
            value={form.edad}
            onChange={handleChange}
            name="edad"
          />
          <Input
            label="Descripción"
            value={form.descripcion}
            onChange={handleChange}
            name="descripcion"
          />
          <Input
            label="Imagen (URL)"
            value={form.imagen}
            onChange={handleChange}
            name="imagen"
          />
          <Button type="submit" className="w-full">
            Agregar Candidato
          </Button>
        </form>
      </div>
    </Layout>
  );
}
