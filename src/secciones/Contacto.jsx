import "../estilos/contacto.css";
import AnimatedSection from "../componentes/AnimatedSection";

import { useForm, ValidationError } from "@formspree/react";

function Contacto() {
  const [state, handleSubmit] = useForm("xkjwwwor");

  if (state.succeeded) {
    return (
      <AnimatedSection className="contacto">
        <div className="contacto-form">
          <div className="editor-header">
            <div className="editor-buttons">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>

            <span className="file-name">contacto.js</span>
          </div>

          <div className="mensaje-exito">
            <div className="linea">
              <span className="keyword">const</span>

              <span className="variable">respuesta</span>

              <span>= {"{"}</span>
            </div>

            <div className="linea indentado">
              <span className="propiedad">estado:</span>

              <span className="string">"enviado ✓"</span>
            </div>

            <div className="linea indentado">
              <span className="propiedad">mensaje:</span>

              <span className="string">"¡Gracias por contactarme! Te responderé lo antes posible :)"</span>
            </div>

            <div className="linea">
              <span>{"}"}</span>
            </div>

            <button onClick={() => window.location.reload()}>
              ▶ volver(contacto);
            </button>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection className="contacto">
      <div className="contacto-form">
        <div className="editor-header">
          <div className="editor-buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span className="file-name">contacto.js</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="comentario">
            <span>/**</span>
            <span>
              {" "}
              * ¿Tenés una propuesta, una consulta o simplemente querés ponerte
              en contacto?
            </span>
            <span>
              {" "}
              * Completá el formulario y te responderé lo antes posible :)
            </span>
            <span> */</span>
          </div>

          <div className="linea">
            <span className="keyword">const</span>
            <span className="variable"> contacto</span>
            <span>= {"{"}</span>
          </div>

          <div className="linea campo">
            <label>nombre:</label>
            <input
              type="text"
              name="nombre"
              placeholder='"Tu nombre"'
              required
            />
            <span>,</span>
          </div>

          <div className="linea campo">
            <label>email:</label>
            <input
              type="email"
              name="email"
              placeholder='"correo@ejemplo.com"'
              required
            />
            <span>,</span>
          </div>

          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <div className="linea campo">
            <label>asunto:</label>
            <input
              type="text"
              name="asunto"
              placeholder='"Oferta laboral"'
              required
            />
            <span>,</span>
          </div>

          <div className="linea campo mensaje">
            <label>mensaje:</label>

            <textarea
              name="mensaje"
              rows="4"
              placeholder='"Escribime un mensaje..."'
              required
            />

            <span>,</span>
          </div>

          <ValidationError
            prefix="Mensaje"
            field="mensaje"
            errors={state.errors}
          />

          <div className="linea">
            <span>{"}"}</span>
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "▶ enviando..." : "▶ enviar(contacto);"}
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}

export default Contacto;
