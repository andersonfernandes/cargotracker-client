import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import MenuHeader from "./Header";
import "./style.css";

export function Menu() {
  return (
    <div className="menuComponent">
      <MenuHeader />
      <nav>
        <ul>
          <li>
          <Link to="/">
              <AiFillHome className="icon" /> Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
