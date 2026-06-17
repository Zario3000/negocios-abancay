import "./Hero.css";

import logo from "../../assets/images/olivo-persona.png";

import { motion } from "framer-motion";

export default function Hero() {

  return (

    <section className="hero">

      <div className="container hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity:0, x:-100 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
        >

          <span className="hero-badge">
            Innovación • Negocios • Tecnología
          </span>

          <h1>

            Encuentra oportunidades, construye tu futuro.

          </h1>

          <p>

            Empleos, servicios, alquiler de maquinaria, habitaciones y más en un solo lugar. Para personas como tú en Abancay

          </p>

          <div className="hero-buttons">

            <a href="#prototipo" className="btn-primary">
              Ver Prototipo
            </a>

            <a href="#video" className="btn-secondary">
              Ver Video Pitch
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity:0, x:100 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
        >

          <img src={logo} alt="logo CNA" />

        </motion.div>

      </div>

    </section>
  );
}