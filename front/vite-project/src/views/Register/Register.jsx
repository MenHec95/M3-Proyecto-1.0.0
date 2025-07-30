import { Formik, Form, Field } from "formik";
import "./Register.css";
export default function Register() {
  return (
    <Formik initialValues={{ name: "", email: "", birthdate: "", nDni: "", username: "", password: "" }}>
      <Form className="register-form">
        <label>Nombre y Apellido</label>
        <Field type="text" name="name" placeholder="Nombres y Apellidos" />
        <label>Email</label>
        <Field type="text" name="email" placeholder="usuario@proveedor.com" />
        <label>Fecha de nacimiento</label>
        <Field type="text" name="birthdate" placeholder="12-10-1995" />
        <label>Número de documento</label>
        <Field type="number" name="nDni" placeholder="1111111" />
        <label>Usuario</label>
        <Field type="text" name="username" />
        <label>Contraseña</label>
        <Field type="password" name="password" />
        <button>Registrar</button>
      </Form>
    </Formik>
  );
}
