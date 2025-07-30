import { Formik, Form, Field } from "formik";

export default function Register() {
  return (
    <Formik initialValues={{ name: "", email: "", birthdate: "", nDni: "", username: "", password: "" }}>
      <Form>
        <label>Nombre y Apellido</label>
        <Field type="text" name="name" />
        <label>Email</label>
        <Field type="text" name="email" />
        <label>Fecha de nacimiento</label>
        <Field type="text" name="birthdate" />
        <label>Numero de documento</label>
        <Field type="number" name="nDni" />
        <label>Usuario</label>
        <Field type="text" name="username" />
        <label>Contraseña</label>
        <Field type="password" name="password" />
        <button>Registrar</button>
      </Form>
    </Formik>
  );
}
