import "../estilos/menu.css";
import {
  FaHouse,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa6";

import { NavLink } from "react-router-dom";

function Menu() {
  const opciones = [
    {
      path: "/",
      icono: <FaHouse />,
      titulo: "Inicio",
    },
    {
      path: "/sobre-mi",
      icono: <FaUser />,
      titulo: "Sobre mí",
    },
    {
      path: "/curriculum",
      icono: <FaGraduationCap />,
      titulo: "Currículum",
    },
    {
      path: "/proyectos",
      icono: <FaBriefcase />,
      titulo: "Proyectos",
    },
    {
      path: "/contacto",
      icono: <FaEnvelope />,
      titulo: "Contacto",
    },
  ];

  return (
    <div className="menu-contenedor">
      <nav className="menu">
        {opciones.map((opcion) => (
          <NavLink
            key={opcion.path}
            to={opcion.path}
            title={opcion.titulo}
            className={({ isActive }) => (isActive ? "activo" : "")}
            end={opcion.path === "/"}
          >
            {opcion.icono}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Menu;
