import { Link } from "react-router-dom";
import './style.css';

export default function AdminMenu() {
  return (
    <nav className="adminMenuComponent">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/track">Track</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/book">Book</Link>
        </li>
      </ul>
    </nav>
  );
}
