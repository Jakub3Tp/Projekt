import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || {};
        const user = users[username];

        if (user && user.password === password) {
            localStorage.setItem("loggedInUser", username);
            alert("Zalogowano pomyślnie!");
            navigate("/");  // Przekierowanie na stronę główną
        } else {
            alert("Nieprawidłowa nazwa użytkownika lub hasło.");
        }
    };

    return (
        <div className="container">
            <h2>Logowanie</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Zaloguj</button>
            </form>
        </div>
    );
}
