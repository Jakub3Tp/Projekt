import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Reservation() {
    const [reservations, setReservations] = useState([]);
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

    useEffect(() => {
        fetch("http://localhost:3000/reservation")
            .then(res => res.json())
            .then(data => {
                if (currentUser) {
                    const userReservations = data.filter(r => r.user === currentUser.username);
                    setReservations(userReservations);
                } else {
                    setReservations([]);
                }
            });
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/reservation/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        })
            .then(response => {
                if (response.ok) {
                    setReservations(prevReservations => prevReservations.filter(reservation => reservation.id !== id));
                } else {
                    console.error("Błąd podczas usuwania rezerwacji");
                }
            })
            .catch(error => console.log("Błąd podczas usuwania rezerwacji", error));
    }

    return <>
        <div className="container mt-4">
            <h1 className="text-center mb-4">Twoje rezerwacje</h1>
            <div className="row">
                <AnimatePresence>
                {reservations.length === 0 ? (
                    <p className="text-center">Brak rezerwacji</p>
                ) : (
                    reservations.map(res => (
                        <motion.div
                            key={res.id}
                            className="col-md-4"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 1}}
                        >
                            <div className="card mb-2">
                                <img src={res.image} className="card-img-top" alt={res.tutor}/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{res.tutor}</h5>
                                    <p className="card-text">
                                        <strong>Umówiona Data:</strong> {res.date}<br/>
                                        <strong>Umówiona Godzina:</strong> {res.time}<br/>
                                        <strong>Korepetycje z:</strong> {res.reason}<br/>
                                        <button className="btn btn-danger"
                                                onClick={() => handleDelete(res.id)}>Zrezygnuj z rezerwacji
                                        </button>
                                        <br/>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
                </AnimatePresence>
            </div>
        </div>
    </>
}