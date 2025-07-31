import { useFormik } from "formik";
import Swal from "sweetalert2";
import "./Register.css";
import { registerValidates } from "../../helpers/validates";

export default function Register() {
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
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Aquí iría tu llamada API real
        console.log("Enviando datos:", values);

        await Swal.fire({
          title: "¡Registro exitoso!",
          icon: "success",
          text: "Tu cuenta ha sido creada correctamente",
          confirmButtonColor: "#9A86A4",
        });
      } catch (error) {
        await Swal.fire({
          title: "Error",
          text: "Ocurrió un problema al registrar",
          icon: "error",
          confirmButtonColor: "#e74c3c",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = await formik.validateForm();
    if (Object.keys(errors).length > 0) {
      await Swal.fire({
        title: "Error en el formulario",
        html: `<ul>${Object.values(errors)
          .map((err) => `<li>${err}</li>`)
          .join("")}</ul>`,
        icon: "error",
        confirmButtonColor: "#e74c3c",
      });
      return;
    }

    formik.handleSubmit(e);
  };

  return (
    <div className="register-section">
      <div className="register-overlay">
        <form className="register-form" onSubmit={handleSubmit}>
          <label>Nombre y Apellido</label>
          <input type="text" name="name" placeholder="Nombres y Apellidos" onChange={formik.handleChange} value={formik.values.name} />

          <label>Email</label>
          <input type="text" name="email" placeholder="usuario@proveedor.com" onChange={formik.handleChange} value={formik.values.email} />

          <label>Fecha de nacimiento</label>
          <input type="date" name="birthdate" placeholder="12-10-1995" onChange={formik.handleChange} value={formik.values.birthdate} />

          <label>Número de documento</label>
          <input type="text" name="nDni" placeholder="1111111" onChange={formik.handleChange} value={formik.values.nDni} />

          <label>Usuario</label>
          <input type="text" name="username" onChange={formik.handleChange} value={formik.values.username} />

          <label>Contraseña</label>
          <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />

          <button type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Registrando..." : "Registrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
