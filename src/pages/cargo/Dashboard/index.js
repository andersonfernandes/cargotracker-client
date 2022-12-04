import { useEffect, useState } from "react";

import Container from "../../../components/Container";
import { AdminMenu } from "../../../components/Menus/AdminMenu";
import { Card } from "./components/Card";

import "./style.css";

export default function CargoDashboard() {
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    fetch("https://cargotracker-api.up.railway.app/cargos")
      .then((response) => response.json())
      .then(([data]) => {
        setCargos([data, data, data]);
      });
  }, []);

  return (
    <Container>
      <AdminMenu />
      <main className="page-content">
        <h1 className="page-title">Cargas registradas</h1>
        <div className="cargo-container">
          <div className="cargo-wrapper">
            <h2 className="cargo-section-title">Routed Cargo</h2>
            <section className="cargo-grid">
              {cargos.map((cargo) => (
                <Card key={cargo._id} cargo={cargo} />
              ))}
            </section>
            <h2 className="cargo-section-title">Not Routed Cargo</h2>
            <section className="cargo-grid">
              {cargos.map((cargo) => (
                <Card key={cargo._id} cargo={cargo} />
              ))}
            </section>
            <h2 className="cargo-section-title">Claimed Cargo</h2>
            <section className="cargo-grid">
              {cargos.map((cargo) => (
                <Card key={cargo._id} cargo={cargo} />
              ))}
            </section>
          </div>
        </div>
      </main>
    </Container>
  );
}
