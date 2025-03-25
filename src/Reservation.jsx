import { useState, useEffect } from "react";
export default function Reservation() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/reservation")
            .then(response => response.json())
            .then(data => setReservations(data))
            .catch(error => console.error("Błąd pobierania rezerwacji:", error));
    }, [])

    return <>
        <div className="container mt-4">
            <h1 className="text-center mb-4">Twoje rezerwacje</h1>
            <div className="row">
                {reservations.length === 0 ? (
                    <p className="text-center">Brak rezerwacji</p>
                ) : (
                    reservations.map(res => (
                        <div key={res.id} className="col-md-4">
                            <div className="card mb-4">
                                <img src={res.image} className="card-img-top" alt={res.tutor}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{res.tutor}</h5>
                                    <p className="card-text">
                                        <strong>Data:</strong> {res.date}<br/>
                                        <strong>Godzina:</strong> {res.time}<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    </>
}