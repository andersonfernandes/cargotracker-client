import './style.css';

export default function Container({ children }) {
    return (
        <main className="containerComponent">
            {children}
        </main>
    )
}