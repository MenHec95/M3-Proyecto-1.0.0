import { useState } from "react";
import MyTurns from "../../helpers/myAppointments";
import Turno from "../../components/Turno/Turno";

export default function MisTurnos() {
  const [turnos, setTurnos] = useState(MyTurns);
  return (
    <div>
      <div>
        <h1> Mis turnos</h1>
      </div>
      <div>
        {turnos.length > 0 ? (
          turnos.map((turno) => {
            return <Turno key={turno.id} id={turno.id} date={turno.date} time={turno.time} satatus={turno.status} />;
          })
        ) : (
          <h1>No hay Citas para mostrar</h1>
        )}
      </div>
    </div>
  );
}
