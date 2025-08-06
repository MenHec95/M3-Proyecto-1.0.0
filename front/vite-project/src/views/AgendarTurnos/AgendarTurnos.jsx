import { useFormik } from "formik";
import Swal from "sweetalert2";
import "./AgendarTurnos.css";
import { agendarValidates } from "../../helpers/validates";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AgendarTurnos() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
    },
    validate: agendarValidates,
    onSubmit: (values) => {
      axios
        .post("", values)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire({
              title: "¡Turno agendado!",
              icon: "success",
              text: "Has agendado tu turno correctamente",
              confirmButtonColor: "#9A86A4",
            });
            navigate("/MisTurnos");
          }
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.message.includes("email")) {
            Swal.fire({
              title: "Error",
              text: `Ocurrió un problema al registrar, ya existe un Usuario con este el email ${formik.values.email}`,
              icon: "error",
              confirmButtonColor: "#e74c3c",
            });
          }
        });
      console.log("Enviando datos:", values);
    },
  });

  return (
    <div className="agendar-section">
      <div className="agendar-overlay">
        <h2 className="agendar-title">
          LUNAS
          <br />
          Agendar Turno
        </h2>
        <form className="agendar-form" onSubmit={formik.handleSubmit}>
          <label>Fecha del turno</label>
          <input type="date" name="date" placeholder="Fecha del turno" onChange={formik.handleChange} value={formik.values.date} />
          {formik.errors.date ? formik.errors.date : ""}

          <label>Hora</label>
          <input type="time" name="time" placeholder="Hora del turno" onChange={formik.handleChange} value={formik.values.time} />
          {formik.errors.time ? formik.errors.time : ""}

          <button type="submit" disabled={Object.keys(formik.errors).length > 0 || !formik.values.name || !formik.values.birthdate} className="submit-btn">
            Agendar
          </button>
        </form>
      </div>
    </div>
  );
}
