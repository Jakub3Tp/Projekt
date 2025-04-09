import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:3000/users?username=${username}`);
        const users = await res.json();

        if (users.length > 0 && users[0].password === password) {
            localStorage.setItem("loggedInUser", JSON.stringify(users[0]));
            alert("Zalogowano pomyślnie!");
            navigate("/home");
            window.location.reload();
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
