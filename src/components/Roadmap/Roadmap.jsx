import "./Roadmap.css";

import { motion } from "framer-motion";

export default function Roadmap() {

  const roadmap = [
    {
      phase: "Fase 1",
      title: "MVP",
      description:
        "Desarrollo de la plataforma inicial y validación de funcionalidades principales."
    },
    {
      phase: "Fase 2",
      title: "Validación",
      description:
        "Obtención de retroalimentación de usuarios y empresas locales."
    },
    {
      phase: "Fase 3",
      title: "Beta Pública",
      description:
        "Lanzamiento controlado para los primeros usuarios."
    },
    {
      phase: "Fase 4",
      title: "Lanzamiento",
      description:
        "Disponibilidad para empresas, emprendedores y trabajadores."
    },
    {
      phase: "Fase 5",
      title: "Expansión",
      description:
        "Crecimiento regional y conexión con nuevos sectores productivos."
    }
  ];

  return (

    <section className="roadmap">

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
            ROADMAP
          </span>

          <h2 className="section-title">
            Nuestra ruta hacia el crecimiento
          </h2>

          <p className="section-description">
            Una visión clara para convertirnos en la plataforma líder
            de oportunidades económicas en la región.
          </p>

        </motion.div>

        <div className="timeline">

          {roadmap.map((item,index)=>(

            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{
  once:false,
  amount:0.2
}}
              transition={{
                duration:.5,
                delay:index*.15
              }}
            >

              <div className="timeline-circle">
                {index + 1}
              </div>

              <div className="timeline-card">

                <span className="phase">
                  {item.phase}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}