import { AiFillHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { GiCardboardBoxClosed } from "react-icons/gi";
import MenuHeader from "./Header";
import "./style.css";

export function Menu() {
  const location = useLocation();

  return (
    <div className="menu-component">
      <MenuHeader />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <AiFillHome className="icon" /> Home
            </Link>
          </li>
          <li className={location.pathname === "/track" ? "active" : "deative"}>
            <Link to="/track">
              <GiCardboardBoxClosed className="icon" /> Track
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
