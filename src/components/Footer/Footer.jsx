import "./Footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-brand">

          <h2>Centro de Negocios Abancay</h2>

          <p>
            Conectando oportunidades, empresas
            y crecimiento económico mediante
            tecnología e innovación.
          </p>

        </div>

        <div className="footer-links">

          <h3>Enlaces</h3>

          <a href="#problema">Problema</a>
          <a href="#solucion">Solución</a>
          <a href="#video">Video Pitch</a>
          <a href="#prototipo">Prototipo</a>

        </div>

        <div className="footer-contact">

          <h3>Contacto</h3>

          <p>
            contacto@cna.pe
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Centro de Negocios Abancay.
        Todos los derechos reservados.

      </div>

    </footer>

  );
}