import "./Problem.css";

import { motion } from "framer-motion";

import {
  FaBuilding,
  FaUserTie,
  FaTools,
  FaHandshake
} from "react-icons/fa";

export default function Problem() {

  const problems = [
    {
      icon: <FaBuilding />,
      title: "Empresas",
      description:
        "Dificultad para encontrar proveedores, personal y maquinaria disponible."
    },
    {
      icon: <FaUserTie />,
      title: "Trabajadores",
      description:
        "Las oportunidades laborales están dispersas en múltiples plataformas."
    },
    {
      icon: <FaTools />,
      title: "Propietarios",
      description:
        "Equipos y herramientas permanecen sin uso gran parte del tiempo."
    },
    {
      icon: <FaHandshake />,
      title: "Emprendedores",
      description:
        "Existe poca visibilidad para promocionar servicios y conseguir clientes."
    }
  ];

  return (

    <section id="problema" className="problem">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="section-tag">
            EL PROBLEMA
          </span>

          <h2 className="section-title">
            Miles de oportunidades se pierden cada día
          </h2>

          <p className="section-description">
            Empresas, emprendedores y trabajadores enfrentan dificultades
            para conectarse rápidamente y generar nuevas oportunidades.
          </p>

        </motion.div>

        <div className="problem-grid">

          {problems.map((item, index) => (

            <motion.div
              key={index}
              className="problem-card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
            >

              <div className="problem-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}