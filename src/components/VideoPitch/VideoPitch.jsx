import "./VideoPitch.css";

import { useState } from "react";

import { FaPlay } from "react-icons/fa";

import thumbnail from "../../assets/images/video-thumbnail.jpg";

export default function VideoPitch() {

  const [open, setOpen] = useState(false);

  return (
    <section id="video" className="video-section">

      <div className="container">

        <span className="section-tag">
          VIDEO PITCH
        </span>

        <h2 className="section-title">
          Descubre nuestra propuesta en acción
        </h2>

        <p className="section-description">
          Conoce cómo Centro de Negocios Abancay busca
          conectar personas, empresas y oportunidades.
        </p>

        <div
          className="video-card"
          onClick={() => setOpen(true)}
        >

          <img
            src={thumbnail}
            alt="Video Pitch"
          />

          <div className="play-button">

            <FaPlay />

          </div>

        </div>

      </div>

      {open && (

        <div
          className="video-modal"
          onClick={() => setOpen(false)}
        >

          <div
            className="video-content"
            onClick={(e) => e.stopPropagation()}
          >

            <iframe
              src="https://www.youtube.com/embed/TU_VIDEO"
              title="Video Pitch"
              allowFullScreen
            />

          </div>

        </div>

      )}

    </section>
  );
}