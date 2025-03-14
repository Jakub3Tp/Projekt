import { Outlet, NavLink } from "react-router";

export default function Template() {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ZnanyKorepetytor</a>
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
                                className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                                Strona Główna
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="reserve"
                                className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                                Rezerwacje
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="reservation"
                                className={({ isActive }) => isActive ? "nav-link active fw-bold" : "nav-link"}>
                                Twoje rezerwacje
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            <Outlet />
        </div>
    </>
}
