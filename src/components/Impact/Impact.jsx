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
            Planes y precios 
          </h2>

          <p className="section-description">
            Nuestro objetivo es impulsar el desarrollo económico
            local mediante una plataforma digital accesible,
            eficiente y segura.
          </p>

        </motion.div>

        <div className="impact-grid">

         <div className="card-planes">
          <h2>Plan gratis</h2>
          <h3>$0.0</h3>
          <ul>
            <li>Seis anuncios por mes</li>
            <li>Busqueda libre de anuncios</li>
      
          </ul>
         
         
         </div>
         <div className="card-planes"><h2>Plan Básico Mensual</h2> <h3>$10</h3> <ul><li>Búsque avanzada de anuncios</li>
         <li>Diez anuncios por mes</li> <li>Anuncios más visibles</li></ul></div>
         <div className="card-planes"><h2>Plan Premiun Mensual</h2> <h3>$15</h3> <ul><li>Anuncios ilimitados</li>
         <li>anuncios con más visibilidad</li>
         <li></li></ul></div>
         
        </div>

      </div>
    </section>
  );
}