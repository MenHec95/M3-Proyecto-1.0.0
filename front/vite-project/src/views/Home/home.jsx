import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <section className="hero">
          <div className="hero-content">
            <h1>Bienvenid@ a Lunas</h1>
            <p>Un espacio de calma, energía y renovación.</p>
          </div>
        </section>

        <section className="about">
          <h2>Nuestra filosofía</h2>
          <p>
            En Lunas creemos en el equilibrio entre cuerpo, mente y espíritu. Ofrecemos terapias holísticas, masajes relajantes y tratamientos energéticos para ayudarte a reconectar con tu bienestar
            interior.
          </p>
        </section>

        <section className="services-preview">
          <h2>Servicios destacados</h2>
          <div className="services-list">
            <div className="service-card">
              <h3>Masajes relajantes</h3>
              <p>Con aceites esenciales y música suave para armonizar tu energía.</p>
            </div>
            <div className="service-card">
              <h3>Reiki y sanación energética</h3>
              <p>Canalizamos energía para liberar bloqueos y restaurar el flujo vital.</p>
            </div>
            <div className="service-card">
              <h3>Rituales de luna llena</h3>
              <p>Conectá con tu ciclo interior a través de rituales guiados mensuales.</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>¿Lista para tu momento de paz?</h2>
          <p>Reservá tu turno y regalate bienestar.</p>
          <a className="cta-button">
            <Link to="/AgendarTurnos">"Agendar Turnos"</Link>
          </a>
        </section>
      </div>
    </>
  );
};

export default Home;
