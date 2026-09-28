import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const contenido = document.querySelector(".contenido");

    if (contenido) {
      contenido.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;