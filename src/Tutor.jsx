import {useNavigate, useParams} from "react-router";
import { useEffect, useState } from "react";
import RatingBox from "./RatingBox.jsx";
//import tutorsData from "./assets/tutorsData.json";

export default function Tutor() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tutor, setTutor] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/tutors/${id}`)
            .then(response => response.json())
            .then(data => setTutor(data))
            .catch(error => console.log("Błąd pobierania danych", error));
    })

    const handleReservation = () => {
        if (!tutor) return;

        const newReservation = {
            id: Date.now(),
            tutor: tutor.name,
            date: new Date().toISOString().split("T")[0],
            time: selectedTime,
            image: tutor.image
        };

        fetch("http://localhost:3000/reservation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReservation),
        })
            .then(() => {
                console.log("Rezerwacja dodana!");
                navigate("/reservation");
            })
            .catch(error => console.error("Błąd dodawania rezerwacji:", error));
    };

    if (!tutor) {
        return <h1 className="text-center mt-5">Korepetytor nie znaleziony</h1>;
    }

    return <>
        <div className="container">
            <RatingBox/>
            <h1>{tutor.name}</h1>
            <img src={tutor.image} alt="Korepetytor" style={{height: '300px', width: '300px'}}/>
            <div className="container d-flex align-items-center">
                <label htmlFor="timePicker">Wybierz godzinę:</label>
                <input
                    type="time"
                    id="timePicker"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="form-control w-25"
                />
                <button type="button" className="btn btn-primary" style={{marginLeft: "50px"}}
                        onClick={handleReservation}>Zarezerwój korepetycje
                </button>
            </div>

            <div className="container" style={{marginTop: '50px'}}>
                <p>O mnie: </p>
                <p>
                    {tutor.description}
                </p>
            </div>
            <button type="button" className="btn btn-danger" style={{marginTop: '50px'}}
                    onClick={() => navigate(`/reserve`)}>Powrót
            </button>
        </div>
    </>
}