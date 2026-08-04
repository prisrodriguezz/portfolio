import BarraLateral from "./componentes/BarraLateral";
import Menu from "./componentes/Menu";

import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import GuiaBienvenida from "./componentes/GuiaBienvenida";

import Inicio from "./secciones/Inicio";
import SobreMi from "./secciones/SobreMi";
import Curriculum from "./secciones/Curriculum";
import Proyectos from "./secciones/Proyectos";
import Contacto from "./secciones/Contacto";

function App() {
  const [mostrarGuia, setMostrarGuia] = useState(
    !localStorage.getItem("guia-vista"),
  );

  const cerrarGuia = () => {
    localStorage.setItem("guia-vista", "true");

    setMostrarGuia(false);
  };

  return (
    <div className="contenedor-principal">
      <div className="portfolio">
        <BarraLateral />

        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </div>

      <div className="menu-wrapper">
        <Menu />

        {mostrarGuia && <GuiaBienvenida cerrarGuia={cerrarGuia} />}
      </div>
    </div>
  );
}

export default App;
