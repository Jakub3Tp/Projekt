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
        <div className="container mt-5">
            <h2>Logowanie</h2>
            <form onSubmit={handleLogin} className="w-50">
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
                <button type="submit" className="btn btn-primary">Zaloguj</button>
            </form>
        </div>
    );
}
