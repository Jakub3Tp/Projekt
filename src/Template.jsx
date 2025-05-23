import {Outlet, NavLink, useNavigate} from "react-router";
import {useEffect, useState} from "react";

export default function Template() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("loggedInUser");
        try {
            if (stored) {
                const parsed = JSON.parse(stored);
                if (parsed?.username) {
                    setUser(parsed);
                }
            }
        } catch (error) {
            console.error("Błąd parsowania użytkownika:", error);
        }
    }, []);


    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">ZnanyKorepetytor</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="home"
                                className={({isActive}) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                                Strona Główna
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="reserve"
                                className={({isActive}) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                                Rezerwacje
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="reservation"
                                className={({isActive}) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                                Twoje rezerwacje
                            </NavLink>
                        </li>
                        {user && (
                            <li className="nav-item">
                                <NavLink
                                    to="AddTutor"
                                    className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                                    Dodaj Korepetytora
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    {user ? (
                        <ul className="navbar-nav">
                            <li className="nav-item nav-link">
                                {user && <strong>Witaj, {user.username}</strong>}
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-danger ms-2" onClick={() =>{
                                    localStorage.removeItem("loggedInUser");
                                    setUser(null);
                                    navigate("/login");
                                }}>
                                    Wyloguj
                                </button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="login" className={({isActive}) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                                    Logowanie
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="Registration" className={({isActive}) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                                    Rejestracja
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            <Outlet/>
        </div>
    </>
}
