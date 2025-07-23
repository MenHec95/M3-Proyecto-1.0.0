import Usuario from "../assets/Usuario";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="logo">
          <img src="../../public/img/logo.png" class="logoImg" />
          <span class="logoTit">LUNAS ESPACIO HOLISTICO & SPA</span>
        </div>

        <ul className="navbarLinks">
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
