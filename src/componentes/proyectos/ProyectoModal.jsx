import { useState } from "react";
import "../../estilos/proyectos.css";

{
  /*Se encarga de mostrar imagenes de cada proyecto en un modal */
}

function ProyectoModal({ proyecto, cerrar }) {
  const [imagenActual, setImagenActual] = useState(0);

  function siguienteImagen() {
    setImagenActual((actual) =>
      actual === proyecto.imagenes.length - 1 ? 0 : actual + 1,
    );
  }

  function anteriorImagen() {
    setImagenActual((actual) =>
      actual === 0 ? proyecto.imagenes.length - 1 : actual - 1,
    );
  }

  return (
    <div className="modal-overlay" onClick={cerrar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar" onClick={cerrar}>
          ✕
        </button>

        <h2>{proyecto.titulo}</h2>

        {proyecto.imagenes ? (
          <div className="galeria">
            <button onClick={anteriorImagen}>◀</button>

            <img src={proyecto.imagenes[imagenActual]} alt={proyecto.titulo} />

            <button onClick={siguienteImagen}>▶</button>
          </div>
        ) : (
          <iframe
            src={proyecto.documentacion}
            title={proyecto.titulo}
            className="pdf-viewer"
          />
        )}

        {proyecto.imagenes && (
          <div className="indicadores">
            {proyecto.imagenes.map((_, index) => (
              <span
                key={index}
                className={index === imagenActual ? "activo" : ""}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProyectoModal;
