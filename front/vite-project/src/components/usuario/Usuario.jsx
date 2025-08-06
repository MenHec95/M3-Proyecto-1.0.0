import { useNavigate } from "react-router-dom";
import "./Usuario.css";
import Swal from "sweetalert2";
import { useContext } from "react";
import { UserContext } from "../../../context/Context";

const Usuario = () => {
  const { userName, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logoutUser();
    navigate("/Login");
    Swal.fire({
      icon: "warning",
      title: "Tu Sesion ha sido cerrada con exito!",
    });
  };
  return (
    <div className="usuario">
      <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/astral-7998996-6580607.png?f=webp" className="usuarioAvatar" />
      <div className="usuarioInfo">
        <span className="usuarioName">{userName}</span>
        <button className="logoutBtn" onClick={handleLogOut}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Usuario;
