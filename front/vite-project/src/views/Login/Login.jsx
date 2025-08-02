import { useFormik } from "formik";
import Swal from "sweetalert2";

import { loginValidates } from "../../helpers/validates";
import axios from "axios";

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
          if (res.status === 201) {
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
          // console.log(error);
          //   if (error.response.data.message.includes("email")) {
          //     Swal.fire({
          //       title: "Error",
          //       text: `Ocurrió un problema al registrar, ya existe un Usuario con este el email ${formik.values.email}`,
          //       icon: "error",
          //       confirmButtonColor: "#e74c3c",
          //     });
          //   } else if (error.response.data.message.includes("username")) {
          //     Swal.fire({
          //       title: "Error",
          //       text: `Ocurrió un problema al registrar, ya existe el Usuario ${formik.values.username}`,
          //       icon: "error",
          //       confirmButtonColor: "#e74c3c",
          //     });
          //   } else if (error.response.data.message.includes("nDni")) {
          //     Swal.fire({
          //       title: "Error",
          //       text: `Ocurrió un problema al registrar, ya existe un Usuario con este DNI ${formik.values.nDni}`,
          //       icon: "error",
          //       confirmButtonColor: "#e74c3c",
          //     });
          //   }
        });
      // console.log("Enviando datos:", values);
    },
  });

  return (
    <div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label>Usuario</label>
          <input type="text" name="username" onChange={formik.handleChange} value={formik.values.username} />
          {formik.errors.username ? formik.errors.username : ""}

          <label>Contraseña</label>
          <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
          {formik.errors.password ? formik.errors.password : ""}

          <button type="submit" disabled={Object.keys(formik.errors).length > 0 || !formik.values.password || !formik.values.username} className="submit-btn">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
