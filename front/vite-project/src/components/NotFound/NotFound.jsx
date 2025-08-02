import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-overlay">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Página no encontrada</h2>
        <p className="notfound-text">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        <div className="notfound-illustration">
          <div className="moon"></div>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="star"></div>
            ))}
          </div>
        </div>
        <Link to="/" className="notfound-button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
