import ButtonLink from "../../components/Button/Link";
import './style.css';

export default function Home() {
  return (
    <main>
      <ButtonLink to="/track">Public Tracking Interface</ButtonLink>
      <ButtonLink to="/dashboard">Administration Interface</ButtonLink>
    </main>
  );
}
