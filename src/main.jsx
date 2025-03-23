import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Home from "./Home.jsx";
import Reserve from "./Reserve.jsx";
import Template from "./Template.jsx";
import Reservation from "./Reservation.jsx";
import Tutor from "./Tutor.jsx";
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            {/*<App />*/}
            <Routes>
                <Route element={<Template />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="reserve" element={<Reserve />} />
                    <Route path="reservation" element={<Reservation />} />
                    <Route path="tutor/:id" element={<Tutor />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Registration" element={<Registration />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)