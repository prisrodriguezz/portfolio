import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import TabsProyectos from "../componentes/proyectos/TabsProyectos";
import ListaProyectos from "../componentes/proyectos/ListaProyectos";

import AnimatedSection from "../componentes/AnimatedSection";

import "../estilos/proyectos.css";

function Proyectos() {
  const [categoriaActiva, setCategoriaActiva] = useState("desarrollo");

  return (
    <AnimatedSection className="proyectos">
      <h1>Proyectos</h1>

      <TabsProyectos
        categoriaActiva={categoriaActiva}
        cambiarCategoria={setCategoriaActiva}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={categoriaActiva}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
        >
          <ListaProyectos categoria={categoriaActiva} />
        </motion.div>
      </AnimatePresence>
    </AnimatedSection>
  );
}

export default Proyectos;
