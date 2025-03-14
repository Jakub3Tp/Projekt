import pjedlikowski from "./assets/pjedlikowski.jpg";
import adam from "./assets/adam.jpg";
import { useNavigate } from "react-router";

export default function Reserve() {
    const navigate = useNavigate();
    return <>
        <div className="container d-flex justify-content-center text-center">
            <h1>Zarezerwuj Spotkanie</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="card" style={{width: "18rem"}}>
                    <img src={pjedlikowski} className="card-img-top" alt="Pan P"/>
                    <div className="card-body">
                        <h5 className="card-title">Przymysław Pilikowski</h5>
                        <p className="card-text">
                            Jestem absolwentem informatyki technicznej na Politechnice Wrocławskiej - ukończyłem ją w
                            2021
                            r.
                        </p>
                        <button className="btn btn-primary" onClick={() => navigate(`/tutor`)}>Szczegóły</button>
                    </div>
                </div>

                <div className="card" style={{width: "18rem"}}>
                    <img src={adam} className="card-img-top" alt="Pan A"/>
                    <div className="card-body">
                        <h5 className="card-title">Adam Darczewski</h5>
                        <p className="card-text">
                            Mam na imię Adam. Jestem nauczycielem programowania i przedmiotów informatycznych. Realizuje
                            również wszelkie usługi związane z tą dziedziną.
                        </p>
                        <a href="Tutor.jsx" className="btn btn-primary">Szczegóły</a>
                    </div>
                </div>
            </div>
        </div>

    </>
}
