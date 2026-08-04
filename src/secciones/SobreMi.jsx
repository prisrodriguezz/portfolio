import "../estilos/sobreMi.css";
import AnimatedSection from "../componentes/AnimatedSection";

import { FaCode, FaBug } from "react-icons/fa6";

function SobreMi() {
  return (
    <AnimatedSection className="sobre-mi">
      <section className="presentacion">
        <h1>Sobre mí</h1>

        <p>
          Soy estudiante avanzada de la{" "}
          <strong> Licenciatura en Sistemas de la Información</strong> y
          <strong> Analista Programadora Universitaria</strong>, con interés en
          el desarrollo de software y el aseguramiento de la calidad.
        </p>

        <p>
          Disfruto analizar problemas, aprender nuevas tecnologías y participar
          en el diseño de soluciones que combinen funcionalidad, organización y
          una buena experiencia para el usuario.
        </p>

        <p>
          Actualmente me encuentro en la búsqueda de mi primera experiencia
          profesional, donde pueda continuar aprendiendo, aportar mis
          conocimientos y seguir creciendo dentro del área de tecnología.
        </p>
      </section>

      <section className="areas-interes">
        <h2>Áreas de interés</h2>

        <div className="columnas">
          <article>
            <h3>
              <FaCode /> Desarrollo de Software
            </h3>
            <p>
              Me interesa participar en el desarrollo de aplicaciones web y de
              escritorio, colaborando desde el análisis de requerimientos hasta
              la implementación de soluciones. Disfruto modelar sistemas,
              escribir código mantenible y aprender nuevas tecnologías.
            </p>
          </article>

          <article>
            <h3>
              <FaBug /> Testing y Calidad
            </h3>
            <p>
              Considero que la calidad forma parte del desarrollo desde sus
              primeras etapas. Me interesa comprender el funcionamiento de las
              aplicaciones, diseñar casos de prueba e identificar oportunidades
              de mejora para construir software más confiable.
            </p>
          </article>
        </div>
      </section>

      <section className="complementario">
        <h2>✨ Más allá del código</h2>

        <p>
          Creo que desarrollar software también implica creatividad,
          organización y curiosidad por aprender constantemente. Fuera de la
          universidad disfruto dedicar tiempo a mi emprendimiento de confección,
          un proyecto que nació como un hobby y terminó enseñándome mucho sobre
          planificación, comunicación, resolución de problemas y mejora
          continua.
        </p>

        <p>
          Aunque son ámbitos diferentes, descubrí que mi emprendimiento y la
          tecnología tienen mucho en común: ambos me desafían a aprender
          constantemente, comprender las necesidades de las personas y crear
          soluciones que aporten valor.
        </p>

        <p className="destacado">
          Disfruto aprender, crear y transformar ideas en soluciones.
        </p>
      </section>
    </AnimatedSection>
  );
}

export default SobreMi;
