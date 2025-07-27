import Usuario from "../usuario/Usuario";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <img src="../../public/img/logo.png" class="logoImg" />
          <span>LUNAS ESPACIO HOLISTICO & SPA</span>
        </div>

        <ul>
          <li>Inicio</li>
          <li>Mis turnos</li>
          <li>
            <Usuario />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
