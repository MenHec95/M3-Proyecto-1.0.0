import { useFormik } from "formik";
import Swal from "sweetalert2";
import "./Register.css";
import { registerValidates } from "../../helpers/validates";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
      nDni: "",
      username: "",
      password: "",
    },
    validate: registerValidates,
    onSubmit: (values) => {
      axios
        .post("http://localhost:3000/users/register", values)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire({
              title: "¡Registro exitoso!",
              icon: "success",
              text: "Tu cuenta ha sido creada correctamente",
              confirmButtonColor: "#9A86A4",
            });
            navigate("/Login");
          }
          // console.log(res);
        })
        .catch((error) => {
          // console.log(error);
          if (error.response.data.message.includes("email")) {
            Swal.fire({
              title: "Error",
              text: `Ocurrió un problema al registrar, ya existe un Usuario con este el email ${formik.values.email}`,
              icon: "error",
              confirmButtonColor: "#e74c3c",
            });
          } else if (error.response.data.message.includes("username")) {
            Swal.fire({
              title: "Error",
              text: `Ocurrió un problema al registrar, ya existe el Usuario ${formik.values.username}`,
              icon: "error",
              confirmButtonColor: "#e74c3c",
            });
          } else if (error.response.data.message.includes("nDni")) {
            Swal.fire({
              title: "Error",
              text: `Ocurrió un problema al registrar, ya existe un Usuario con este DNI ${formik.values.nDni}`,
              icon: "error",
              confirmButtonColor: "#e74c3c",
            });
          }
        });
      // console.log("Enviando datos:", values);
    },
  });

  return (
    <div className="register-section">
      <div className="register-overlay">
        <h2 className="register-title">
          LUNAS
          <br />
          ESPACIO HOLÍSTICO & SPA
        </h2>
        <form className="register-form" onSubmit={formik.handleSubmit}>
          <h2 className="register-title">Registro de Usuario</h2>
          <label>Nombre y Apellido</label>
          <input type="text" name="name" placeholder="Nombres y Apellidos" onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name ? formik.errors.name : ""}

          <label>Email</label>
          <input type="text" name="email" placeholder="usuario@proveedor.com" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email ? formik.errors.email : ""}

          <label>Fecha de nacimiento</label>
          <input type="date" name="birthdate" placeholder="dd-mm-aaaa" onChange={formik.handleChange} value={formik.values.birthdate} />
          {formik.errors.birthdate ? formik.errors.birthdate : ""}

          <label>Número de documento</label>
          <input type="number" name="nDni" placeholder="1111111" onChange={formik.handleChange} value={formik.values.nDni} />
          {formik.errors.nDni ? formik.errors.nDni : ""}

          <label>Usuario</label>
          <input type="text" name="username" onChange={formik.handleChange} value={formik.values.username} />
          {formik.errors.username ? formik.errors.username : ""}

          <label>Contraseña</label>
          <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
          {formik.errors.password ? formik.errors.password : ""}

          <button
            type="submit"
            disabled={
              Object.keys(formik.errors).length > 0 ||
              !formik.values.name ||
              !formik.values.birthdate ||
              !formik.values.email ||
              !formik.values.nDni ||
              !formik.values.password ||
              !formik.values.username
            }
            className="submit-btn"
          >
            Registrar
          </button>
          <label>
            ¿Ya tienes cuenta? <Link to="/Login">Inicia Sesión</Link>
          </label>
        </form>
      </div>
    </div>
  );
}
