import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../components/Container";
import { AdminMenu } from "../../components/Menus/AdminMenu";
import "./style.css";

export default function Cargo() {
  const location = useLocation();
  const [cargo, setCargo] = useState({});
  const [cargoId, setCargoId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCargoId(location.pathname.split("/")[2]);
  }, [location.pathname]);

  return (
    <Container>
      <AdminMenu />
      <main className="page-content">
        <h1 className="page-title">Cargo Details {cargoId}</h1>
      </main>
    </Container>
  );
}
