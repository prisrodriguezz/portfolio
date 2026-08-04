import desarrollo from "../../datos/proyectos/desarrollo";
import testing from "../../datos/proyectos/testing";
import "../../estilos/proyectos.css";

import ProyectoCard from "./ProyectoCard";

{/*Se encarga de elegir que lista usar segun el clic, desarrollo.js o testing.js */}

function ListaProyectos({ categoria }) {
  const proyectos = categoria === "desarrollo" ? desarrollo : testing;

  return (
    <div className="lista-proyectos">
      {proyectos.map((proyecto) => (
        <ProyectoCard key={proyecto.id} proyecto={proyecto} />
      ))}
    </div>
  );
}

export default ListaProyectos;
