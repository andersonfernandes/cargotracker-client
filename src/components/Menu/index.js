import { Link } from "react-router-dom";
import './style.css';

export default function Menu() {
  return (
    <nav className="menuComponent">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
