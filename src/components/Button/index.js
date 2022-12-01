import './style.css';

export function Button({ type, children }) {
    return (
        <button
            type={type}
            className="buttonComponent"
        >
            {children}
        </button>
    )
}