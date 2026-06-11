import "./Impact.css";

import { motion } from "framer-motion";

export default function Impact() {

  const stats = [
    {
      number: "+1000",
      title: "Oportunidades Publicadas"
    },
    {
      number: "+500",
      title: "Empresas Conectadas"
    },
    {
      number: "+2000",
      title: "Usuarios Potenciales"
    },
    {
      number: "24/7",
      title: "Disponibilidad"
    }
  ];

  return (
    <section className="impact">

      <div className="container">

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{
  once:false,
  amount:0.2
}}
          transition={{ duration:.8 }}
        >

          <span className="section-tag">
            IMPACTO
          </span>

          <h2 className="section-title">
            Transformando la manera de conectar oportunidades
          </h2>

          <p className="section-description">
            Nuestro objetivo es impulsar el desarrollo económico
            local mediante una plataforma digital accesible,
            eficiente y segura.
          </p>

        </motion.div>

        <div className="impact-grid">

          {stats.map((item,index)=>(
            <motion.div
              key={index}
              className="impact-card"
              initial={{ opacity:0, scale:.8 }}
              whileInView={{ opacity:1, scale:1 }}
              viewport={{
  once:false,
  amount:0.2
}}
              transition={{
                duration:.5,
                delay:index*0.15
              }}
            >

              <h3>{item.number}</h3>

              <p>{item.title}</p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}