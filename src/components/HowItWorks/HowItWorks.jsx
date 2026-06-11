import "./HowItWorks.css";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Publica una oportunidad",
    description:
      "Comparte empleos, servicios, alquileres, maquinaria o cualquier oportunidad económica."
  },
  {
    number: "02",
    title: "Encuentra interesados",
    description:
      "Las personas podrán descubrir tu publicación mediante filtros y categorías."
  },
  {
    number: "03",
    title: "Conecta directamente",
    description:
      "Facilita la comunicación entre empresas, emprendedores y ciudadanos."
  },
  {
    number: "04",
    title: "Genera negocios",
    description:
      "Convierte contactos en oportunidades reales para impulsar la economía local."
  }
];

export default function HowItWorks() {
  return (
    <section
      className="how-it-works"
      id="funcionamiento"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .7 }}
        >

          <span className="section-tag">
            FUNCIONAMIENTO
          </span>

          <h2 className="section-title">
            ¿Cómo funciona Centro de Negocios Abancay?
          </h2>

          <p className="section-description">
            Una plataforma diseñada para conectar oportunidades,
            personas y empresas en un solo ecosistema digital.
          </p>

        </motion.div>

        <div className="steps-grid">

          {steps.map((step) => (

            <motion.div
              key={step.number}
              className="step-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: .5 }}
            >

              <div className="step-number">
                {step.number}
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}