import "./Hero.css";

import logo from "../../assets/images/logo_cna.jpg";

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

            Centro de Negocios Abancay

          </h1>

          <p>

            Una plataforma digital que conecta personas,
            emprendedores y empresas para generar
            oportunidades económicas, empleo y negocios.

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