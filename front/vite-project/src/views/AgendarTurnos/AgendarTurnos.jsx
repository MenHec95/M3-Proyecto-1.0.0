import { useFormik } from "formik";
import Swal from "sweetalert2";
import "./AgendarTurnos.css";
import { agendarValidates } from "../../helpers/validates";

import { useContext } from "react";
import { UserContext } from "../../../context/Context";

export default function AgendarTurnos() {
  const { createTurnoUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
    },
    validate: agendarValidates,
    onSubmit: async (values) => {
      try {
        await createTurnoUser(values);

        Swal.fire({
          title: "¡Turno agendado!",
          icon: "success",
          text: "Has agendado tu turno correctamente",
          confirmButtonColor: "#9A86A4",
        });
      } catch (error) {
        Swal.fire({
          title: `Error: ${error.response.data.details}`,
          text: "Intentelo de nuevo",
          icon: "error",
          confirmButtonColor: "#e74c3c",
        });
      } finally {
        formik.resetForm;
      }
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

          <button type="submit" disabled={Object.keys(formik.errors).length > 0 || !formik.values.date || !formik.values.time} className="submit-btn">
            Agendar
          </button>
        </form>
      </div>
    </div>
  );
}
