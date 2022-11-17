import { Link } from "react-router-dom";

export default function AdminMenu() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>

      <div>
        <Link to="/track">Track</Link>
      </div>

      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div>
        <Link to="/book">Book</Link>
      </div>
    </>
  );
}
