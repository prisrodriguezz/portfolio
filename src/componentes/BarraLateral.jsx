import "../estilos/barraLateral.css";

import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope
} from "react-icons/fa6";

function BarraLateral() {
    return (
        <aside className="barra-lateral">

            <div className="barra-lateral-contenido">
                <div className="foto-perfil">
                    <img src="/foto-perfil.jpeg" alt="Foto de Priscila Rodríguez" />
                </div>
                <h1>Priscila Rodríguez</h1>
                <h2>Analista Programadora Universitaria</h2>

                <div className="redes">
                    <a href="https://github.com/prisrodriguezz" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/priscila-rodríguez-baa8bb416?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                    <a href="mailto:rodriguezpris10@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
                </div>

                <button className="boton-cv" onClick={() => window.open("/cv-priscila-rodriguez.pdf", "_blank")}>Descargar CV</button>
            </div>

            <footer>© 2026 Priscila Rodríguez</footer>
        </aside>
    );
}

export default BarraLateral;