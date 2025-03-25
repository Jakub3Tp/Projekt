import { useState, useEffect } from "react";
export default function Reservation() {
    const [reservations, setReservations] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/reservation")
            .then(response => response.json())
            .then(data => setReservations(data));
    }, [])

    const addReservation = (newReservation) => {
        fetch("http://localhost:3000/api/reservation", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newReservation),
        }).then(() => setReservations([...reservations, newReservation]));
    };

    return <>
        <div className="container d-flex justify-content-center text-center">
            {reservations.map((reservation) => (
                <li key={reservation.id}></li>
                ))
    </>
}
