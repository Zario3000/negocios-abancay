import "./Comments.css";

import { useEffect, useState } from "react";

import {
  collection,
  addDoc,
  getDocs,
  query,
  limit,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../../firebase/firebase";
const testimonials = [
  {
    nombre: "Juan Limaya",
    comentario:
      "Me gusta la iniciativa porque permitirá encontrar oportunidades laborales de manera más sencilla."
  },
  {
    nombre: "María Quispe",
    comentario:
      "Una plataforma muy necesaria para conectar empresas y emprendedores locales."
  },
  {
    nombre: "Carlos Ramos",
    comentario:
      "Facilitará el acceso a servicios y oportunidades para muchas personas."
  },
  {
    nombre: "Rosa Huamán",
    comentario:
      "Excelente propuesta para impulsar el desarrollo económico regional."
  },
  {
    nombre: "Luis Torres",
    comentario:
      "La plataforma tiene mucho potencial para generar nuevas oportunidades."
  },
  {
    nombre: "Ana Gómez",
    comentario:
      "Muy interesante para pequeñas empresas que necesitan visibilidad."
  }
];

export default function Comments() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [success, setSuccess] = useState(false);
  const [comentarios, setComentarios] = useState([]);

  const cargarComentarios = async () => {

   const q = query(
  collection(db, "comentarios"),
  orderBy("fecha", "desc"),
  limit(15)
);

    const data = await getDocs(q);

    const lista = data.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setComentarios(lista);
  };

  useEffect(() => {

    cargarComentarios();

  }, []);

  const enviarComentario = async (e) => {

    e.preventDefault();

    if(
      !nombre.trim() ||
      !correo.trim() ||
      !comentario.trim()
    ){
      return;
    }

    await addDoc(
  collection(db, "comentarios"),
  {
    nombre,
    correo,
    comentario,
    fecha: serverTimestamp()
  }
);
setSuccess(true);

setTimeout(() => {

  setSuccess(false);

},3000);

    setNombre("");
    setCorreo("");
    setComentario("");

    cargarComentarios();
  };

  return (

    <section
      id="comentarios"
      className="comments-section"
    >
        {success && (
  <div className="toast-success">
    ✓ Comentario enviado correctamente
  </div>
)}

      <div className="container">

        <span className="section-tag">
          COMENTARIOS
        </span>

        <h2 className="section-title">
          Déjanos tu opinión
        </h2>

        <p className="section-description">
          Tu opinión nos ayudará a mejorar
          nuestra propuesta.
        </p>

        <form
          className="comment-form"
          onSubmit={enviarComentario}
        >

          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e)=>
              setNombre(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e)=>
              setCorreo(e.target.value)
            }
          />

          <textarea
            placeholder="Comentario"
            value={comentario}
            onChange={(e)=>
              setComentario(e.target.value)
            }
          />

          <button type="submit">
            Enviar comentario
          </button>

        </form>

        <div className="comments-grid">

          {testimonials.map((item,index)=>(
  <div
    className="comment-card"
    key={index}
  >

    <h3>{item.nombre}</h3>

    <p>{item.comentario}</p>

  </div>
))}

        </div>

      </div>

    </section>
    

  );
}