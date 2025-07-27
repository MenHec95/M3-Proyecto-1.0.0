export default function Turno({ id, date, time, status }) {
  return (
    <div style={{ border: "1px solid black", margin: "8px", padding: "8px" }}>
      <div>
        <h3>Turno #{id}</h3>
        <span>{status}</span>
      </div>
      <div>
        <p>Fecha: {date.slice(0, 10)}</p>
        <p>Hora: {time}</p>
      </div>
    </div>
  );
}
