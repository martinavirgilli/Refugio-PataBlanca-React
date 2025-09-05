import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { RefugioProvider } from "./context/RefugioContext";
import Layout from "./components/Layout";
import Button from "./components/Button";
import EmptyState from "./components/EmptyState";

import HomePage from "./pages/HomePage";
import CandidatosPage from "./pages/CandidatosPage";
import CandidatoDetailPage from "./pages/CandidatoDetailPage";
import NuevoCandidatoPage from "./pages/NuevoCandidatoPage";
import AdopcionesLayout from "./pages/adopciones/AdopcionesLayout";
import AdopcionesResumen from "./pages/adopciones/AdopcionesResumen";
import AdopcionesHistorial from "./pages/adopciones/AdopcionesHistorial";

function App() {
  return (
    <RefugioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/candidatos" element={<CandidatosPage />} />
          <Route path="/candidatos/:id" element={<CandidatoDetailPage />} />
          <Route path="/nuevo" element={<NuevoCandidatoPage />} />
          <Route path="/adopciones" element={<AdopcionesLayout />}>
            <Route index element={<AdopcionesResumen />} />
            <Route path="historial" element={<AdopcionesHistorial />} />
          </Route>
          <Route
            path="*"
            element={
              <Layout>
                <EmptyState
                  title="404"
                  description="La página no existe."
                  action={
                    <Link to="/">
                      <Button>Ir al inicio</Button>
                    </Link>
                  }
                />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </RefugioProvider>
  );
}

export default App;