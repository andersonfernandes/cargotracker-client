import { useEffect, useState } from "react";

import Container from "../../components/Container";
import { AdminMenu } from "../../components/Menus/AdminMenu";
import { Card } from "./components/Card";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./style.css";

export default function CargoDashboard() {
  const [cargos, setCargos] = useState([]);
  const [isLoaging, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://cargotracker-api.up.railway.app/cargos")
      .then((response) => response.json())
      .then((res) => {
        setCargos(res);
        setIsLoading(false);
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

            {!isLoaging ? (
              <section className="cargo-grid">
                {cargos.map((cargo) => (
                  <Card key={cargo._id} cargo={cargo} />
                ))}
              </section>
            ) : (
              <Skeleton
                containerClassName="cargo-grid"
                baseColor="#181818"
                highlightColor="#2C2D2D"
                height={312}
                inline={true}
                count={3}
              />
            )}
            <h2 className="cargo-section-title">Not Routed Cargo</h2>

            {!isLoaging ? (
              <section className="cargo-grid">
                {cargos.map((cargo) => (
                  <Card key={cargo._id} cargo={cargo} />
                ))}
              </section>
            ) : (
              <Skeleton
                containerClassName="cargo-grid"
                baseColor="#181818"
                highlightColor="#2C2D2D"
                height={312}
                inline={true}
                count={3}
              />
            )}
            <h2 className="cargo-section-title">Claimed Cargo</h2>

            {!isLoaging ? (
              <section className="cargo-grid">
                {cargos.map((cargo) => (
                  <Card key={cargo._id} cargo={cargo} />
                ))}
              </section>
            ) : (
              <Skeleton
                containerClassName="cargo-grid"
                baseColor="#181818"
                highlightColor="#2C2D2D"
                height={312}
                inline={true}
                count={3}
              />
            )}
          </div>
        </div>
      </main>
    </Container>
  );
}
