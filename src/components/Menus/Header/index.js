import { GiCargoShip } from "react-icons/gi";
import "./style.css";

export default function MenuHeader() {
  return (
    <header className="headerComponent">
      <GiCargoShip className="logo" />
      <div className="name">
        <h1>Cargo Tracker</h1>
        <span>Since 2022</span>
      </div>
    </header>
  );
}
