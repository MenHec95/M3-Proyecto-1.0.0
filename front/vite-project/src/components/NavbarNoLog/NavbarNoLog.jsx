import Usuario from "../usuario/Usuario";
import "../Navbar/Navbar.css";
import { useLocation, Link } from "react-router-dom";

export default function NavbarNoLog() {
  const Location = useLocation();

  return (
    <header>
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
            <Link to="/">{Location.pathname === "/" ? "" : "Inicio"}</Link>
          </li>
          <li className="nav-item">
            <Link to="/Register">{Location.pathname === "/Register" ? "" : "Registrarse"}</Link>
          </li>
          <li className="nav-item">
            <Link to="/Login">{Location.pathname === "/Login" ? "" : "Iniciar Sesion"}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
