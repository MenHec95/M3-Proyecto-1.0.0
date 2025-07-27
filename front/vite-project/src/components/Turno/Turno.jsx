export default function Turno({ id, date, time, satatus }) {
  return (
    <div>
      <div>
        <h3>Turno #{id}</h3>
        <span>{satatus}</span>
      </div>
      <div>
        <p>Fecha: {date}</p>
        <p>Hora: {time}</p>
      </div>
    </div>
  );
}
