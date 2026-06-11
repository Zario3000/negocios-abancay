import "./Solution.css";

import { motion } from "framer-motion";

export default function Solution() {

  return (

    <section
      id="solucion"
      className="solution"
    >

      <div className="container">

        <motion.div
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{
            once:false,
            amount:0.2
          }}
          transition={{ duration:.8 }}
        >

          <span className="section-tag">
            NUESTRA SOLUCIÓN
          </span>

          <h2 className="section-title">
            Un ecosistema digital para conectar oportunidades
          </h2>

          <p className="section-description">

            Centro de Negocios Abancay permite que
            empresas, emprendedores y ciudadanos
            publiquen y encuentren oportunidades
            económicas en un solo lugar.

          </p>

        </motion.div>

        <div className="solution-grid">

          <motion.div
            className="solution-card"
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{
              once:false,
              amount:0.2
            }}
            transition={{ duration:.5 }}
          >

            <h3>Publicación rápida</h3>

            <p>
              Publica empleos, servicios,
              alquileres y oportunidades
              en pocos minutos.
            </p>

          </motion.div>

          <motion.div
            className="solution-card"
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{
              once:false,
              amount:0.2
            }}
            transition={{
              duration:.5,
              delay:.1
            }}
          >

            <h3>Búsqueda inteligente</h3>

            <p>
              Encuentra información mediante
              filtros por categoría,
              ubicación y sector.
            </p>

          </motion.div>

          <motion.div
            className="solution-card"
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{
              once:false,
              amount:0.2
            }}
            transition={{
              duration:.5,
              delay:.2
            }}
          >

            <h3>Conexión directa</h3>

            <p>
              Facilita el contacto entre
              empresas, proveedores,
              trabajadores y clientes.
            </p>

          </motion.div>

        </div>

      </div>

    </section>

  );
}