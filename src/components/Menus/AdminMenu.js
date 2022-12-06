import { Link, useLocation } from "react-router-dom";
import MenuHeader from "./Header";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { GiCardboardBoxClosed, GiCargoCrate } from "react-icons/gi";

import "./style.css";

export function AdminMenu() {
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
          <li className={location.pathname.split("/")[1] === "dashboard" ? "active" : "deative"}>
            <Link to="/dashboard">
              <AiFillAppstore className="icon" /> Dashboard
            </Link>
          </li>
          <li className={location.pathname === "/book" ? "active" : "deative"}>
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
