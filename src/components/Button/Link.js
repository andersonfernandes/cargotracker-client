import { Link } from "react-router-dom";
import './style.css';

export default function ButtonLink({ to, type, children }) {
    return (
        <Link to={to || ""}>
            <button
                type={type}
                className="button-component"
            >
                {children}
            </button>
        </Link>
    )
}