import { useFormik } from "formik";
import "./Register.css";
// import { registerValidates } from "../../helpers/validates";
export default function Register() {
  const formik = useFormik({
    initialValues: { name: "", email: "", birthdate: "", nDni: "", username: "", password: "" },
    // validate: registerValidates,
    onSubmit: (values) => {
      console.log("formulario enviado", values);
    },
  });

  return (
    <div className="register-section">
      <div className="register-overlay">
        <form className="register-form" onSubmit={formik.handleSubmit}>
          <label>Nombre y Apellido</label>
          <input type="text" name="name" placeholder="Nombres y Apellidos" onChange={formik.handleChange} value={formik.values.name} />
          <label>Email</label>
          <input type="text" name="email" placeholder="usuario@proveedor.com" onChange={formik.handleChange} value={formik.values.email} />
          <label>Fecha de nacimiento</label>
          <input type="text" name="birthdate" placeholder="12-10-1995" onChange={formik.handleChange} value={formik.values.birthdate} />
          <label>Número de documento</label>
          <input type="number" name="nDni" placeholder="1111111" onChange={formik.handleChange} value={formik.values.nDni} />
          <label>Usuario</label>
          <input type="text" name="username" onChange={formik.handleChange} value={formik.values.username} />
          <label>Contraseña</label>
          <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
          <button
            type="submit"
            disabled={
              // Object.keys(formik.errors).length > 0 ||
              !formik.values.name || !formik.values.birthdate || !formik.values.email || !formik.values.nDni || !formik.values.password || !formik.values.username
            }
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
