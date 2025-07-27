import { useEffect, useState } from "react";
// import MyTurns from "../../helpers/myAppointments";
import Turno from "../../components/Turno/Turno";
import axios from "axios";

export default function MisTurnos() {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointments")
      .then((data) => {
        setTurnos(data.data.data);
      })
      .catch();
  }, []);
  return (
    <div>
      <div>
        <h1> Mis turnos</h1>
      </div>
      <div>
        {turnos.length > 0 ? (
          turnos.map((turno) => {
            return <Turno key={turno.id} id={turno.id} date={turno.date} time={turno.time} status={turno.Status} />;
          })
        ) : (
          <h1>No hay Citas para mostrar</h1>
        )}
      </div>
    </div>
  );
}
