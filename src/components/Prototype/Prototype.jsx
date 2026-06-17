import "./Prototype.css";

import { motion } from "framer-motion";

import preview from "../../assets/images/figma-preview.jpg";

import { FaArrowRight } from "react-icons/fa";

export default function Prototype() {

  const figmaLink =
    "https://pupil-mural-60899132.figma.site/";

  return (

    <section
      id="prototipo"
      className="prototype"
    >

      <div className="container prototype-container">

        <motion.div
          className="prototype-left"
          initial={{ opacity:0, x:-60 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{
  once:false,
  amount:0.2
}}
          transition={{ duration:.7 }}
        >

          <span className="section-tag">
            PROTOTIPO INTERACTIVO
          </span>

          <h2 className="section-title left">
            Explora la experiencia de nuestra plataforma
          </h2>

          <p className="prototype-description">

            Hemos desarrollado un prototipo funcional
            que permite visualizar cómo los usuarios
            podrán encontrar empleo, alquilar maquinaria,
            contratar servicios y generar nuevas oportunidades.

          </p>

          <button
            className="prototype-button"
            onClick={() =>
              window.open(figmaLink, "_blank")
            }
          >

            Explorar Prototipo

            <FaArrowRight />

          </button>

        </motion.div>

        <motion.div
          className="prototype-right"
          initial={{ opacity:0 }}
whileInView={{ opacity:1 }}
          viewport={{
  once:false,
  amount:0.2
}}
          transition={{ duration:.7 }}
        >

          <img
            src="https://www.figma.com/make/cbyp2HjzVRHvZQAq0cWvkr/Prototipo-UI-UX-Centro-de-Negocios?t=THJXavMOkFxvajGo-1"
            alt="Figma Preview"
          />

        </motion.div>

      </div>

    </section>

  );
}