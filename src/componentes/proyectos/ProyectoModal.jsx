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

        <div className="modal-header">
          <h2>{proyecto.titulo}</h2>
        </div>

        {proyecto.imagenes ? (
          <div className="galeria-container">
            <div className="imagen-wrapper">
              <img
                src={proyecto.imagenes[imagenActual]}
                alt={`${proyecto.titulo} - ${imagenActual + 1}`}
              />
            </div>

            {/* Controles de navegación limpios debajo de la imagen */}
            <div className="galeria-controles">
              <button className="btn-control" onClick={anteriorImagen}>
                ◀ Anterior
              </button>

              <div className="indicadores">
                {proyecto.imagenes.map((_, index) => (
                  <span
                    key={index}
                    className={index === imagenActual ? "activo" : ""}
                    onClick={() => setImagenActual(index)}
                  />
                ))}
              </div>

              <button className="btn-control" onClick={siguienteImagen}>
                Siguiente ▶
              </button>
            </div>
          </div>
        ) : (
          <iframe
            src={proyecto.documentacion}
            title={proyecto.titulo}
            className="pdf-viewer"
          />
        )}
      </div>
    </div>
  );
}

export default ProyectoModal;
