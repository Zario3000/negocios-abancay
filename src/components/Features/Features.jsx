import "./Features.css";

import { motion } from "framer-motion";

import {
  FaMapMarkedAlt,
  FaSearch,
  FaComments,
  FaUserCheck,
  FaStar,
  FaBrain
} from "react-icons/fa";

export default function Features() {

  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Geolocalización",
      text: "Encuentra oportunidades cercanas a tu ubicación."
    },
    {
      icon: <FaBrain />,
      title: "Match Inteligente",
      text: "La plataforma recomienda conexiones relevantes."
    },
    {
      icon: <FaSearch />,
      title: "Búsqueda Avanzada",
      text: "Filtra por ubicación, categoría, precio y fecha."
    },
    {
      icon: <FaComments />,
      title: "Chat Integrado",
      text: "Comunícate directamente con empresas y usuarios."
    },
    {
      icon: <FaUserCheck />,
      title: "Usuarios Verificados",
      text: "Mayor confianza mediante perfiles validados."
    },
    {
      icon: <FaStar />,
      title: "Sistema de Reputación",
      text: "Calificaciones y comentarios para generar confianza."
    }
  ];

  return (
    <section className="features">

      <div className="container">

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{
  once:false,
  amount:0.2
}}
          transition={{ duration:.7 }}
        >

          <span className="section-tag">
            TECNOLOGÍA E INNOVACIÓN
          </span>

          <h2 className="section-title">
            Diseñada para conectar oportunidades
          </h2>

          <p className="section-description">
            Incorporamos herramientas modernas para facilitar
            la interacción entre personas, empresas y emprendedores.
          </p>

        </motion.div>

        <div className="features-grid">

          {features.map((feature,index)=>(

            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity:0, y:60 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{
  once:false,
  amount:0.2
}}
              transition={{
                duration:.5,
                delay:index*.1
              }}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}