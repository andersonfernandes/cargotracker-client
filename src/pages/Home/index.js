import { Link } from "react-router-dom";
import Button from "../../components/Button";
import './style.css';

export default function Home() {
  return (
    <main>
      <Button to="/track">Public Tracking Interface</Button>
      <Button to="/dashboard">Administration Interface</Button>
    </main>
  );
}
