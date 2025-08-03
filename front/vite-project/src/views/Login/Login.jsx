import { useFormik } from "formik";
import Swal from "sweetalert2";
import "./Login.css";
import { loginValidates } from "../../helpers/validates";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: loginValidates,
    onSubmit: (values) => {
      axios
        .post("http://localhost:3000/users/login", values)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: "¡Login Exitoso!",
              icon: "success",
              text: "Has iniciado sesion correctamente",
              confirmButtonColor: "#9A86A4",
            });
          }
          // console.log(res);
        })
        .catch((error) => {
          //   console.log(error);

          if (error.response.data.message.includes("incorrecto")) {
            Swal.fire({
              title: "Error",
              text: error.response.data.message,
              icon: "error",
              confirmButtonColor: "#e74c3c",
            });
          }
        });
    },
  });

  return (
    <div className="login-section">
      <div className="login-overlay">
        <h2 className="login-title">
          LUNAS
          <br />
          ESPACIO HOLÍSTICO & SPA
        </h2>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <h2 className="login-title">Iniciar Sesión</h2>

          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              className={formik.errors.username && formik.touched.username ? "input-error" : ""}
              placeholder="Ingresa tu usuario"
            />
            {formik.errors.username ? <div className="error-message">{formik.errors.username}</div> : ""}
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={formik.errors.password && formik.touched.password ? "input-error" : ""}
              placeholder="Ingresa tu contraseña"
            />
            {formik.errors.password ? <div className="error-message">{formik.errors.password}</div> : ""}
          </div>

          <button type="submit" disabled={!formik.values.password || !formik.values.username || Object.keys(formik.errors).length > 0} className="submit-btn">
            "Iniciar Sesión"
          </button>
          <label>
            ¿No tienes cuenta? <Link to="/Register">Registro</Link>
          </label>
        </form>
      </div>
    </div>
  );
}
