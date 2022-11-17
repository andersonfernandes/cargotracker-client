import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <Link to="/track">Public Tracking Interface</Link>
      </div>

      <div>
        <Link to="/dashboard">Administration Interface</Link>
      </div>
    </>
  );
}
