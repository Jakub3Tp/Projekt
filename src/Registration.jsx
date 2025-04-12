import { useState } from "react";
import { useNavigate } from "react-router";
import bcrypt from "bcryptjs";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const hashedPassword = await bcrypt.hash(password, 12);
        if (!username || !password || !confirmPassword) {
            alert("Wszystkie pola są wymagane!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Hasła się nie zgadzają!");
            return;
        }

        const res = await fetch(`http://localhost:3000/users?username=${username}`);
        const existing = await res.json();

        if (existing.length > 0) {
            alert("Użytkownik już istnieje!");
            return;
        }

        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password: hashedPassword })
        });

        alert("Rejestracja zakończona sukcesem! Możesz się teraz zalogować.");
        navigate("/login");
        window.location.reload();
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
                        placeholder="Wpisz nazwe użytkownika"
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
                        placeholder="Wpisz hasło"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Powtórz hasło"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Zarejestruj</button>
            </form>
        </div>
    );
}
