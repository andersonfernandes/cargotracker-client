import './style.css';

export function Button({ type, color, children }) {
    return (
        <button
            type={type}
            className="button-component"
            style={{ backgroundColor: color }}
        >
            {children}
        </button>
    )
}