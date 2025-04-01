import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert("Wszystkie pola są wymagane!");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || {};

        if (users[username]) {
            alert("Użytkownik o tej nazwie już istnieje!");
            return;
        }

        users[username] = { password };
        localStorage.setItem("users", JSON.stringify(users));

        alert("Rejestracja zakończona sukcesem! Możesz się teraz zalogować.");
        navigate("/login");
    };

    return (
        <div className="container mt-5">
            <h2>Rejestracja</h2>
            <form onSubmit={handleRegister} className="w-50">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nazwa użytkownika</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Hasło</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Zarejestruj</button>
            </form>
        </div>
    );
}
