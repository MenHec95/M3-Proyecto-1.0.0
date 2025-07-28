import Usuario from "../usuario/Usuario";
import "./Navbar.css";

const Navbar = () => {
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
        <li className="nav-item">Inicio</li>
        <li className="nav-item">Mis Turnos</li>
        <li className="nav-item">
          <Usuario />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
