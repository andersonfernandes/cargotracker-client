import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import Container from "../../components/Container";
import { AdminMenu } from "../../components/Menus/AdminMenu";
import "./style.css";

export default function CargoBook() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://cargotracker-api.up.railway.app/locations")
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      });
  }, []);

  return (
    <Container>
      <AdminMenu />
      <main className="page-content">
        <h1 className="page-title">Book a Cargo</h1>
        <form className="booking-form" onSubmit={(event) => {
          event.preventDefault();

          fetch("https://cargotracker-api.up.railway.app/cargos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              source: event.target[0].value,
              destination: event.target[1].value,
              deadlineAt: event.target[2].value
            })
          })
            .then(response => response.json())
            .then(data => console.log(data));

        }}>
          <h2 className="booking-form-title">Cargo Info</h2>
          <div className="form-field">
            <label>1. Choose the origin of the new cargo</label>
            <select required>
              <option disabled value="default">
                Select an onption
              </option>
              {locations.map((location) => (
                <option key={location._id} value={location._id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label>
              2. Set the destination for this new cargo coming from Melbourne
            </label>
            <select required>
              <option disabled value="default">
                Select an onption
              </option>
              {locations.map((location) => (
                <option key={location._id} value={location._id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label>
              3. Set the arrival deadline for this new Melbourne-Hangzhou cargo
            </label>
            <input required type="date" data />
          </div>
          <div className="form-actions">
            <Button type="reset">Clear</Button>
            <Button type="submit" color="#436BFD">
              Save
            </Button>
          </div>
        </form>
      </main>
    </Container>
  );
}
