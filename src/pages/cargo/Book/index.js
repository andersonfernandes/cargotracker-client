import AdminMenu from "../../../components/AdminMenu";
import { Button } from "../../../components/Button";
import ButtonLink from "../../../components/Button/Link";
import Container from "../../../components/Container";
import './style.css';

export default function CargoBook() {
  return (
    <Container>
      <AdminMenu />
      <main>
        <h1>Book a Cargo</h1>
        <form>
          <div className="formField">
            <label>1. Choose the origin of the new cargo</label>
            <select value="default">
              <option disabled value="default">Select an onption</option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
          <div className="formField">
            <label>2. Set the destination for this new cargo coming from Melbourne</label>
            <select value="default">
              <option disabled value="default">Select an onption</option>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
          <div className="formField">
            <label>3. Set the arrival deadline for this new Melbourne-Hangzhou cargo</label>
            <input type="date" />
          </div>
          <div className="formActions">
            <Button type="reset">Clear</Button>
            <ButtonLink to="/">Cancel</ButtonLink>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </main>
    </Container>
  );
}
