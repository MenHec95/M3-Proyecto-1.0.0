import Usuario from "../usuario/Usuario";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const Location = useLocation();

  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <img
          src="/img/logo.png" // Asume que logo.png está en public/img
          alt="Lunas Espacio Holístico"
          className="navbar-logo"
        />
        <h1 className="navbar-title">
          LUNAS
          <br />
          ESPACIO HOLÍSTICO & SPA
        </h1>
      </div>

      <ul className="navbar-links">
        <li className="nav-item">
          <Link to="/">{location.pathname === "/" ? "" : "Inicio"}</Link>
        </li>
        <li className="nav-item">
          <Link to="/MisTurnos">{location.pathname === "/MisTurnos" ? "" : "Mis Turnos"}</Link>
        </li>
        <li className="nav-item">
          <Link to="/AgendarTurnos">{location.pathname === "/AgendarTurnos" ? "" : "Agendar Turnos"}</Link>
        </li>

        <li className="nav-item">
          <Usuario />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
