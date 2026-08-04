import "../../estilos/proyectos.css";

{/*Se encarga de mostrar los botones "Desarollo", "Testing QA" en base al clic */}

function TabsProyectos({ categoriaActiva, cambiarCategoria }) {
  return (
    <div className="tabs-proyectos">

      <button
        className={categoriaActiva === "desarrollo" ? "activo" : ""}
        onClick={() => cambiarCategoria("desarrollo")}
      >
        Desarrollo
      </button>

      <button
        className={categoriaActiva === "testing" ? "activo" : ""}
        onClick={() => cambiarCategoria("testing")}
      >
        Testing QA
      </button>

    </div>
  );
}

export default TabsProyectos;