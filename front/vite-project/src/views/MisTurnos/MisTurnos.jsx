/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
// import MyTurns from "../../helpers/myAppointments";
import Turno from "../../components/Turno/Turno";

import "./MisTurnos.css";
import { useContext } from "react";
import { UserContext } from "../../../context/Context";

export default function MisTurnos() {
  const { turnosUser, turnos } = useContext(UserContext);
  useEffect(() => {
    turnosUser();
  }, []);
  return (
    <div className="mis-turnos-view">
      <div className="mis-turnos-header">
        <h1>Mis turnos</h1>
      </div>
      <div className="turnos-list">
        {turnos.length > 0 ? (
          turnos.map((turno) => {
            return <Turno key={turno.id} id={turno.id} date={turno.date} time={turno.time} status={turno.Status} />;
          })
        ) : (
          <h1 className="no-turnos-message">No hay Citas para mostrar</h1>
        )}
      </div>
    </div>
  );
}
