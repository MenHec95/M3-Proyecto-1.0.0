import { useNavigate } from "react-router-dom";
import "./Usuario.css";
import Swal from "sweetalert2";
const user = "Usuario";

const Usuario = ({ setIsLogged }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("userId");
    setIsLogged(false);
    Swal.fire({
      icon: "warning",
      title: "Tu Sesion ha sido cerrada con exito!",
    });
    navigate("/Login");
  };
  return (
    <div className="usuario">
      <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/astral-7998996-6580607.png?f=webp" className="usuarioAvatar" />
      <div className="usuarioInfo">
        <span className="usuarioName">{user}</span>
        <button className="logoutBtn" onClick={handleLogOut}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Usuario;
