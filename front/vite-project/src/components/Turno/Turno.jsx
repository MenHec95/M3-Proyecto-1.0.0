import { useContext } from "react";
import "./Turno.css";
import { UserContext } from "../../../context/Context";

export default function Turno({ id, date, time, status }) {
  const { cancelTurno } = useContext(UserContext);

  const handleCancel = async () => {
    await cancelTurno(id);
  };
  return (
    <div className="turno-card">
      <div className="turno-header">
        <h3>Turno #{id}</h3>
        <span className={`turno-status ${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className="turno-body">
        <p>Fecha: {date.slice(0, 10)}</p>
        <p>Hora: {time}</p>
      </div>
      <button className="cancel-turno-btn" onClick={handleCancel} disabled={status === "cancelled"}>
        X
      </button>
    </div>
  );
}
