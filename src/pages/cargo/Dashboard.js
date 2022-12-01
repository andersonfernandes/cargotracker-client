import { useEffect, useState } from "react";
import { format } from 'date-fns';

import AdminMenu from "../../components/AdminMenu";
import Container from "../../components/Container";

export default function CargoDashboard() {
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    fetch('https://cargotracker-api.up.railway.app/cargos')
      .then(response => response.json())
      .then(data => setCargos(data));
  }, []);

  return (
    <Container>
      <AdminMenu />
      <main>

        <h1>Cargas registradas</h1>

        <table>
          <thead>
            <tr>
              <th>Tracking ID</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {cargos.map(cargo => (
              <tr key={cargo._id}>
                <td>{cargo.trackingId}</td>
                <td>{cargo.source.name}</td>
                <td>{cargo.destination.name}</td>
                <td>{format(new Date(cargo.deadlineAt), 'MM/dd/yyyy')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  );
}
