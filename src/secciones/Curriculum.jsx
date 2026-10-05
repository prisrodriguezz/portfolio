import "../estilos/curriculum.css";

import {
  FaGraduationCap,
  FaCode,
  FaPuzzlePiece,
  FaBookOpen,
  FaBullseye,
  FaComments,
  FaCertificate,
  FaRegFilePdf,
  FaBrain,
  FaHandshake,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaVial,
  FaToolbox,
} from "react-icons/fa6";

import AnimatedSection from "../componentes/AnimatedSection";
import { MdOutlineManageSearch } from "react-icons/md";

function Curriculum() {
  return (
    <AnimatedSection className="curriculum">
      <h1>Currículum</h1>

      <div className="curriculum-grid">
        {/*Columna izquierda */}
        <div>
          <section className="formacion">
            <h2>
              <FaGraduationCap className="icono-titulo" /> Formación
            </h2>

            <div className="formacion-lista">
              <article className="formacion-item">
                <span className="marca"></span>

                <div>
                  <h3>Analista Programadora Universitaria</h3>

                  <p className="fecha">2022 · 2025</p>

                  <p className="institucion">
                    Universidad Nacional del Nordeste
                  </p>
                </div>
              </article>

              <article className="formacion-item">
                <span className="marca"></span>

                <div>
                  <h3>Licenciatura en Sistemas de la Información</h3>

                  <p className="fecha">2022 · Actualidad</p>

                  <p className="institucion">
                    Universidad Nacional del Nordeste
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="stack">
            <h2>
              <FaCode className="icono-titulo" /> Stack tecnológico
            </h2>

            <div className="lista-categorias">
              <div className="categoria">
                <h3>
                  <FaDesktop className="icono-categoria" /> Frontend
                </h3>
                <div className="tech-chips">
                  <span className="tech-chip">HTML</span>
                  <span className="tech-chip">CSS</span>
                  <span className="tech-chip">JavaScript</span>
                  <span className="tech-chip">React</span>
                  <span className="tech-chip">Bootstrap</span>
                </div>
              </div>

              <div className="categoria">
                <h3>
                  <FaServer className="icono-categoria" /> Backend
                </h3>
                <div className="tech-chips">
                  <span className="tech-chip">C#</span>
                  <span className="tech-chip">ASP.NET Core</span>
                  <span className="tech-chip">PHP</span>
                  <span className="tech-chip">CodeIgniter 4</span>
                </div>
              </div>

              <div className="categoria">
                <h3>
                  <FaDatabase className="icono-categoria" /> Bases de datos
                </h3>
                <div className="tech-chips">
                  <span className="tech-chip">SQL Server</span>
                  <span className="tech-chip">MySQL</span>
                </div>
              </div>

              <div className="categoria">
                <h3>
                  <FaVial className="icono-categoria" /> QA & Testing
                </h3>
                <div className="tech-chips">
                  <span className="tech-chip">Testing Manual</span>
                  <span className="tech-chip">Testing Funcional</span>
                  <span className="tech-chip">Casos de Prueba</span>
                  <span className="tech-chip">Cypress</span>
                </div>
              </div>

              <div className="categoria">
                <h3>
                  <FaToolbox className="icono-categoria" /> Herramientas
                </h3>
                <div className="tech-chips">
                  <span className="tech-chip">Git</span>
                  <span className="tech-chip">GitHub</span>
                  <span className="tech-chip">VS Code</span>
                  <span className="tech-chip">Visual Studio</span>
                  <span className="tech-chip">Postman</span>
                  <span className="tech-chip">Trello</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*Columna derecha */}
        <div>
          <section className="certificaciones">
            <h2>
              <FaCertificate className="icono-titulo" /> Certificaciones
            </h2>

            <div className="certificaciones-lista">
              <article className="certificacion-card">
                <h3>QA Automatizado - XAcademy</h3>

                <p className="fecha">
                  2026 · Technology with Purpose Foundation
                </p>

                <p className="descripcion">
                  Curso teórico-práctico. Fundamentos de testing y automatización de pruebas mediante trabajo final colaborativo en equipo.
                </p>

                <a
                  href="/certificaciones/xacademy_certificado_qa_automatizado.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pdf"
                  title="Ver certificado"
                >
                  <FaRegFilePdf />
                </a>
              </article>

              <article className="certificacion-card">
                <h3>QA Manual - XAcademy</h3>

                <p className="fecha">
                  2026 · Technology with Purpose Foundation
                </p>

                <p className="descripcion">
                  Curso teórico-práctico. Diseño y ejecución de casos de prueba, reporte de defectos y pruebas funcionales. Incluyó etapa final inmersiva grupal.
                </p>

                <a
                  href="/certificaciones/xacademy_certificado_qa_manual.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pdf"
                  title="Ver certificado"
                >
                  <FaRegFilePdf />
                </a>
              </article>

              <article className="certificacion-card">
                <h3>Web Designer - HTML & CSS</h3>

                <p className="fecha">2025 · Folcademy</p>

                <p className="descripcion">
                  Desarrollo de interfaces web con HTML, CSS y Bootstrap. Proyecto final enfocado en la creación de un portfolio propio.
                </p>

                <a
                  href="/certificaciones/folcademy_certificado_web_designer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pdf"
                  title="Ver certificado"
                >
                  <FaRegFilePdf />
                </a>
              </article>
            </div>
          </section>

          <section className="competencias">
            <h2>
              <FaPuzzlePiece className="icono-titulo" />
              Competencias
            </h2>

            <div className="competencias-grid">
              <div className="competencia">
                <FaBrain />
                <span>Pensamiento analítico</span>
              </div>

              <div className="competencia">
                <FaHandshake />
                <span>Trabajo en equipo</span>
              </div>

              <div className="competencia">
                <FaBookOpen />
                <span>Aprendizaje continuo</span>
              </div>

              <div className="competencia">
                <FaBullseye />
                <span>Organización</span>
              </div>

              <div className="competencia">
                <FaComments />
                <span>Comunicación</span>
              </div>

              <div className="competencia">
                <MdOutlineManageSearch />
                <span>Atención al detalle</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Curriculum;
