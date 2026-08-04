import { useState } from "react";
import ProyectoModal from "./ProyectoModal";
import "../../estilos/proyectos.css";

{
  /*Representa la card de cada proyecto */
}

function ProyectoCard({ proyecto }) {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <>
      <article className="proyecto-card">
        {/* Imagen */}

        <div className="proyecto-imagen" onClick={() => setModalAbierto(true)}>
          <img src={proyecto.imagenPortada} alt={proyecto.titulo} />

          <div className="overlay">
            <span>{proyecto.imagenes ? "🔍 Ver capturas" : "📄 Ver documento"}</span>
          </div>
        </div>

        {/* Información */}

        <div className="proyecto-info">
          <h2>{proyecto.titulo}</h2>

          {/* Etiquetas */}

          <div className="etiquetas">
            {proyecto.tipo.map((tipo) => (
              <span className="etiqueta" key={tipo}>
                {tipo}
              </span>
            ))}
          </div>

          <p>{proyecto.descripcion}</p>

          {/* Tecnologías o herramientas */}

          <div className="chips">
            {proyecto.tecnologias &&
              proyecto.tecnologias.map((tec) => <span key={tec}>{tec}</span>)}

            {proyecto.herramientas &&
              proyecto.herramientas.map((herramienta) => (
                <span key={herramienta}>{herramienta}</span>
              ))}
          </div>

          {/* Acciones */}

          <div className="acciones">
            {proyecto.github && (
              <a
                className="link-repo"
                href={proyecto.github}
                target="_blank"
                rel="noreferrer"
              >
                Ver repositorio ↗
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Modal */}

      {modalAbierto && (
        <ProyectoModal
          proyecto={proyecto}
          cerrar={() => setModalAbierto(false)}
        />
      )}
    </>
  );
}

export default ProyectoCard;
