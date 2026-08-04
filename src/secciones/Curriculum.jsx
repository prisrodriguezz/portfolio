import "../estilos/curriculum.css";
import {
  FaGraduationCap,
  FaCode,
  FaPuzzlePiece,
  FaHandshake,
  FaBookOpen,
  FaBullseye,
  FaComments,
  FaCertificate,
  FaRegFilePdf,
  FaBrain,
} from "react-icons/fa6";

import AnimatedSection from "../componentes/AnimatedSection";

import { MdOutlineManageSearch } from "react-icons/md";

function Curriculum() {
  return (
    <AnimatedSection className="curriculum">
      <h1>Currículum</h1>

      <div className="curriculum-grid">
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

          <section className="certificaciones">
            <h2>
              <FaCertificate className="icono-titulo" /> Certificaciones
            </h2>

            <div className="certificaciones-lista">
              <article className="certificacion-card">
                <h3>QA Automatizado - XAcademy</h3>

                <p className="fecha">
                  Julio 2026 · Technology with Purpose Foundation
                </p>

                <p className="descripcion">
                  Fundamentos de testing y automatización de pruebas.
                </p>

                <a href="/certificaciones/xacademy_certificado_qa_automatizado.pdf" target="_blank" rel="noopener noreferrer"
                  className="btn-pdf" title="Ver certificado">
                  <FaRegFilePdf />
                </a>
              </article>

              <article className="certificacion-card">
                <h3>Web Designer - HTML & CSS</h3>

                <p className="fecha">Mayo 2025 · Folcademy</p>

                <p className="descripcion">
                  HTML, CSS, Git, Bootstrap y desarrollo de interfaces web.
                </p>

                <a href="/certificaciones/folcademy_certificado_web_designer.pdf" target="_blank" rel="noopener noreferrer"
                  className="btn-pdf" title="Ver certificado">
                  <FaRegFilePdf />
                </a>
              </article>
            </div>
          </section>
        </div>

        <div>
          <section className="stack">
            <h2>
              <FaCode className="icono-titulo" /> Tecnologías y herramientas
            </h2>

            <div className="categoria">
              <h3>Frontend</h3>

              <div className="chips">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Bootstrap</span>
              </div>
            </div>

            <div className="categoria">
              <h3>Backend</h3>

              <div className="chips">
                <span>C#</span>
                <span>ASP.NET Core</span>
                <span>PHP</span>
                <span>CodeIgniter 4</span>
              </div>
            </div>

            <div className="categoria">
              <h3>Bases de datos</h3>

              <div className="chips">
                <span>SQL Server</span>
                <span>MySQL</span>
              </div>
            </div>

            <div className="categoria">
              <h3>QA & Testing</h3>

              <div className="chips">
                <span>Testing Manual</span>
                <span>Testing Funcional</span>
                <span>Casos de Prueba</span>
                <span>Cypress</span>
              </div>
            </div>

            <div className="categoria">
              <h3>Herramientas</h3>

              <div className="chips">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Visual Studio</span>
                <span>Postman</span>
                <span>Trello</span>
              </div>
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
