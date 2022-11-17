import { useState } from "react";
import { Link } from "react-router-dom";
import { format } from 'date-fns';

const CargoInfo = ({ cargo }) => {
  return (
    <>
      <div>
        {cargo.source.name} para {cargo.destination.name}
      </div>

      <div>
        Com data limite: {format(new Date(cargo.deadlineAt), 'MM/dd/yyyy')}
      </div>
    </>
  )
}

export default function CargoTrack() {
  const [cargo, setCargo] = useState(null);
  const [trackingId, setTrackingId] = useState(null);

  const getCargoInfo = (e) => {
    e.preventDefault();

    fetch(`https://cargotracker-api.up.railway.app/cargos/${trackingId}`)
      .then(response => response.json())
      .then(data => setCargo(data));
  }

  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>

      <h1>Cargo Tracking</h1>

      <form onSubmit={getCargoInfo}>
        <input onChange={(event) => setTrackingId(event.target.value)} />
      </form>

      <br />

      {cargo && <CargoInfo cargo={cargo} />}
    </>
  );
}
