import { Link } from "react-router-dom";
import './style.css';

export default function Button({ to, children }) {
    return (
        <>
            <Link className="buttonComponent" to={to}>{children}</Link>
        </>
    )
}