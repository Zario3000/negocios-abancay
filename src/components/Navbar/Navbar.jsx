import "./Navbar.css";
import logo from "../../assets/images/logo_cna.jpg";
import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">

        <div className="container navbar-container">

          <div className="logo">
            <img
              src={logo}
              alt="Centro de Negocios Abancay"
            />
          </div>

          <nav className="nav-links">

            <a href="#problema">
              Problema
            </a>

            <a href="#solucion">
              Solución
            </a>

            <a href="#video">
              Pitch
            </a>

            <a href="#prototipo">
              Prototipo
            </a>

            <a href="#comentarios">
              Comentarios
            </a>

          </nav>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
          >
            <FaBars />
          </button>

        </div>

      </header>

      {open && (
        <div
          className="menu-overlay"
          onClick={() => setOpen(false)}
        >

          <div
            className="mobile-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-modal"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>

            <nav className="mobile-links">

              <a
                href="#problema"
                onClick={() => setOpen(false)}
              >
                Problema
              </a>

              <a
                href="#solucion"
                onClick={() => setOpen(false)}
              >
                Solución
              </a>

              <a
                href="#video"
                onClick={() => setOpen(false)}
              >
                Pitch
              </a>

              <a
                href="#prototipo"
                onClick={() => setOpen(false)}
              >
                Prototipo
              </a>

              <a
                href="#comentarios"
                onClick={() => setOpen(false)}
              >
                Comentarios
              </a>

            </nav>

          </div>

        </div>
      )}
    </>
  );
}