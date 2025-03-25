import {useNavigate, useParams} from "react-router";
import { useEffect, useState } from "react";
import RatingBox from "./RatingBox.jsx";
//import tutorsData from "./assets/tutorsData.json";

export default function Tutor() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tutor, setTutor] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/tutors/${id}`)
            .then(response => response.json())
            .then(data => setTutor(data))
            .catch(error => console.log("Błąd pobierania danych", error));
    })
    //const tutor = tutorsData.find(t => t.id === id);

    if (!tutor) {
        return <h1 className="text-center mt-5">Korepetytor nie znaleziony</h1>;
    }

    return <>
        <div className="container">
            <RatingBox />
            <h1>{tutor.name}</h1>
            <img src={tutor.image} alt="Korepetytor" style={{height:'300px', width:'300px'}} />
            <button type="button" className="btn btn-primary" style={{marginLeft:"50px"}}>Zarezerwój korepetycje</button>
            <div className="container" style={{marginTop:'50px'}}>
                <p>O mnie: </p>
                <p>
                    {tutor.description}
                </p>
            </div>

            <button type="button" className="btn btn-danger" style={{marginTop:'50px'}} onClick={() => navigate(`/reserve`)}>Powrót</button>
        </div>
    </>
}