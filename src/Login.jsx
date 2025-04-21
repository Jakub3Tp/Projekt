import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import bcrypt from "bcryptjs";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:3000/users?username=${username}`);
        const users = await res.json();
        const isPasswordValid =  bcrypt.compare(password, users[0].password);

        if (users.length > 0)
            if (isPasswordValid) {
            localStorage.setItem("loggedInUser", JSON.stringify(users[0]));
            alert("Zalogowano pomyślnie!");
            navigate("/home");
            window.location.reload();
        } else {
            alert("Nieprawidłowa nazwa użytkownika lub hasło.");
        }

    };

    return (
        <motion.div
            className="container mt-5"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
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
                <motion.button
                    whileHover={{scale: 1.1}}
                    type="submit"
                    className="btn btn-primary"
                >
                    Zaloguj
                </motion.button>
            </form>
        </motion.div>
    );
}
