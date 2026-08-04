import { motion } from "framer-motion";
import "../estilos/guiaBienvenida.css";

function GuiaBienvenida({ cerrarGuia }) {
  return (
    <div className="contenedor-guia">
      <motion.div
        className="overlay-guia"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
      ></motion.div>

      <motion.div
        className="guia-bienvenida"
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <motion.div
          className="guia-texto"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <h3>👋 Bienvenido</h3>

          <p>
            Navegá por el menú para conocer mi perfil, formación y proyectos.
          </p>
        </motion.div>

        {/* Flecha escritorio */}
        <motion.div
          className="guia-flecha flecha-desktop"
          animate={{
            x: [0, 10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          →
        </motion.div>

        {/* Flecha móvil */}
        <motion.div
          className="guia-flecha flecha-mobile"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          ↓
        </motion.div>

        <button onClick={cerrarGuia}>Entendido</button>
      </motion.div>
    </div>
  );
}

export default GuiaBienvenida;
