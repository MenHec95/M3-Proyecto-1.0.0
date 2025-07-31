import { useFormik } from "formik";
import Swal from "sweetalert2";
import "./Register.css";
import { registerValidates } from "../../helpers/validates";

export default function Register() {
  const formik = useFormik({
    initialValues: { name: "", email: "", birthdate: "", nDni: "", username: "", password: "" },
    validate: registerValidates,
    onSubmit: (values, { setSubmitting }) => {
      Swal.fire({
        title: "¡Registro exitoso!",
        icon: "success",
        text: "Tu cuenta ha sido creada correctamente",
        confirmButtonColor: "#9A86A4", // Usa tu color principal
      });
      console.log("Formulario enviado:", values);
      setSubmitting(false);
    },
  });

  const showErrors = () => {
    const errors = formik.errors;
    const errorMessages = Object.values(errors).filter((msg) => msg);

    if (errorMessages.length > 0) {
      Swal.fire({
        title: "Error en el formulario",
        html: `<ul>${errorMessages.map((msg) => `<li>${msg}</li>`).join("")}</ul>`,
        icon: "error",
        confirmButtonColor: "#e74c3c",
      });
    }
  };

  return (
    <div className="register-section">
      <div className="register-overlay">
        <form className="register-form" onSubmit={formik.handleSubmit}>
          <label>Nombre y Apellido</label>
          <input type="text" name="name" placeholder="Nombres y Apellidos" onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name ? formik.errors.name : ""}
          <label>Email</label>
          <input type="text" name="email" placeholder="usuario@proveedor.com" onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email ? formik.errors.email : ""}
          <label>Fecha de nacimiento</label>
          <input type="text" name="birthdate" placeholder="12-10-1995" onChange={formik.handleChange} value={formik.values.birthdate} />
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
            onClick={() => {
              formik.validateForm().then((errors) => {
                if (Object.keys(errors).length > 0) {
                  showErrors();
                }
              });
            }}
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
