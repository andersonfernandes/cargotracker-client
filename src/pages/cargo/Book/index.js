import { Button } from "../../../components/Button";
import Container from "../../../components/Container";
import { AdminMenu } from "../../../components/Menus/AdminMenu";
import "./style.css";

export default function CargoBook() {
  return (
    <Container>
      <AdminMenu />
      <main className="page-content">
        <h1 className="page-title">Book a Cargo</h1>
        <form className="booking-form">
          <h2 className="booking-form-title">Cargo Info</h2>
          <div className="form-field">
            <label>1. Choose the origin of the new cargo</label>
            <select>
              <option disabled value="default">
                Select an onption
              </option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
          <div className="form-field">
            <label>
              2. Set the destination for this new cargo coming from Melbourne
            </label>
            <select>
              <option disabled value="default">
                Select an onption
              </option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
          <div className="form-field">
            <label>
              3. Set the arrival deadline for this new Melbourne-Hangzhou cargo
            </label>
            <input type="date" />
          </div>
          <div className="form-actions">
            <Button type="reset">Clear</Button>
            <Button type="submit" color="#436BFD">Save</Button>
          </div>
        </form>
      </main>
    </Container>
  );
}
