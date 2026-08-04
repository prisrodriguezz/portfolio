import TypewriterCode from "../componentes/TypewriterCode";
import AnimatedSection from "../componentes/AnimatedSection";

import "../estilos/inicio.css";

function Inicio() {
  return (
    <AnimatedSection  className="inicio">
      <div className="editor">
        <div className="editor-header">
          <div className="editor-buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span className="file-name">inicio.jsx</span>
        </div>

        <div className="editor-body">
          <TypewriterCode />
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Inicio;
