import { useState } from "react";
import { format } from 'date-fns';
import Container from "../../components/Container";
import { Menu } from "../../components/Menus/Menu";

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
    <Container>
      <Menu />
      <main className="page-content">
        <h1  className="page-title">Cargo Tracking</h1>

        <form onSubmit={getCargoInfo}>
          <input onChange={(event) => setTrackingId(event.target.value.toLowerCase())} />
        </form>

        <br />

        {cargo && <CargoInfo cargo={cargo} />}
      </main>
    </Container>
  );
}
