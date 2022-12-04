import { Link } from "react-router-dom";
import MenuHeader from "./Header";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { GiCardboardBoxClosed, GiCargoCrate } from "react-icons/gi";

import "./style.css";

export function AdminMenu() {
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
          <li>
            <Link to="/dashboard">
              <AiFillAppstore className="icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/book">
              <GiCargoCrate className="icon" /> Book
            </Link>
          </li>
          <li>
            <Link to="/track">
              <GiCardboardBoxClosed className="icon" /> Track
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
