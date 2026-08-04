import { useEffect, useMemo, useState } from "react";
import codigoInicio from "../datos/codigoInicio";

function TypewriterCode() {
  const [caracteres, setCaracteres] = useState(0);

  // Calculamos una sola vez la longitud total
  const longitudTotal = useMemo(() => {
    return codigoInicio.reduce((acc, token) => acc + token.text.length, 0);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCaracteres((prev) => {
        if (prev >= longitudTotal) {
          clearInterval(intervalo);
          return prev;
        }

        return prev + 1;
      });
    }, 18);

    return () => clearInterval(intervalo);
  }, [longitudTotal]);

  return (
    <pre className="codigo">

      {codigoInicio.map((token, index) => {

        const inicio = codigoInicio
          .slice(0, index)
          .reduce((acc, item) => acc + item.text.length, 0);

        const visibles = Math.max(
          0,
          Math.min(caracteres - inicio, token.text.length)
        );

        return (
          <span
            key={index}
            className={token.className}
          >
            {token.text.slice(0, visibles)}
          </span>
        );
      })}

      <span className="cursor"></span>

    </pre>
  );
}

export default TypewriterCode;