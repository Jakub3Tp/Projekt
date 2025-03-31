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
        <div className="container">
            <h2>Rejestracja</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Nazwa użytkownika"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Hasło"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Zarejestruj</button>
            </form>
        </div>
    );
}
