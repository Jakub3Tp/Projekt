import { useNavigate } from "react-router";
//import tutorsCard from "./assets/tutorsCard.json";
import {useEffect, useState} from "react";

export default function Reserve() {
    const navigate = useNavigate();
    const [tutorc, setTutors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tutorCard')
            .then(response => response.json())
            .then(data => setTutors(data))
            .catch(error => console.log("Błąd pobierania danych", error));
    }, []);

    return <>
        <div className="container d-flex justify-content-center text-center">
            <h1>Zarezerwuj Spotkanie</h1>
        </div>
        <div className="container" key={tutorc.id}>
            <div className="row">
                {tutorc.map(tutorc => (
                <div className="card" style={{width: "18rem"}}>
                    <img src={tutorc.image} className="card-img-top" alt={tutorc.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{tutorc.name}</h5>
                        <p className="card-text">
                            {tutorc.description}
                        </p>
                        <button className="btn btn-primary" onClick={() => navigate(`/tutor/${tutorc.id}`)}>Szczegóły</button>
                    </div>
                </div>
                    ))}
            </div>
        </div>

    </>
}
