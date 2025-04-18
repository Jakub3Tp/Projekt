import {StrictMode} from 'react'
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
import AddTutor from "./AddTutor.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
                <Routes>
                    <Route element={<Template />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="reserve" element={<Reserve />} />
                        <Route path="reservation" element={<Reservation />} />
                        <Route path="tutor/:id" element={<Tutor />} />
                        <Route path="login" element={<Login />} />
                        <Route path="registration" element={<Registration />} />
                        <Route path="addTutor" element={<AddTutor/>} />
                    </Route>
                </Routes>
        </BrowserRouter>
    </StrictMode>,
)