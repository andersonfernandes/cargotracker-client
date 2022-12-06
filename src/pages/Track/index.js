import { useState } from "react";
import { format } from "date-fns";
import Container from "../../components/Container";
import { Menu } from "../../components/Menus/Menu";
import { Button } from "../../components/Button";

import "./style.css";

const CargoInfo = ({ cargo }) => {
  return (
    <div>
      <div>
        {cargo.source.name} para {cargo.destination.name}
      </div>

      <div>
        Com data limite: {format(new Date(cargo.deadlineAt), "dd/MM/yyyy")}
      </div>
    </div>
  );
};

export default function CargoTrack() {
  const [cargo, setCargo] = useState(null);
  const [trackingId, setTrackingId] = useState(null);

  const getCargoInfo = (e) => {
    e.preventDefault();

    fetch(`https://cargotracker-api.up.railway.app/cargos/${trackingId}`)
      .then((response) => response.json())
      .then((data) => setCargo(data));
  };

  return (
    <Container>
      <Menu />
      <main className="page-content">
        <h1 className="page-title">Cargo Tracking</h1>

        <form className="traking-form" onSubmit={getCargoInfo}>
          <input
            required
            className="traking-form-input"
            placeholder="Insira o ID de rastreio"
            onChange={(event) =>
              setTrackingId(event.target.value.toLowerCase())
            }
          />
          <Button type="submit" color="#436BFD">Rastrear</Button>
        </form>

        <br />

        {cargo && <CargoInfo className="traking-info" cargo={cargo} />}
      </main>
    </Container>
  );
}
