import {useNavigate, useParams} from "react-router";
import { useEffect, useState } from "react";
import RatingBox from "./RatingBox.jsx";
import { motion } from "framer-motion";

export default function Tutor() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tutor, setTutor] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const [reason, setReason] = useState("");


    useEffect(() => {
        fetch(`http://localhost:3000/tutors/${id}`)
            .then(response => response.json())
            .then(data => setTutor(data))
            .catch(error => console.log("Błąd pobierania danych", error));
    }, [id])

    const handleReservation = async () => {
        if (!tutor) return;

        if (!selectedDate || !selectedTime || !reason) {
            alert("Wybierz datę, godzinę lub powód!");
            return;
        }

        const res = await fetch(`http://localhost:3000/reservation?tutor=${encodeURIComponent(tutor.name)}`);
        const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
        const reservation = await res.json();

        const alreadyReserved = reservation.find(r =>
            r.date === selectedDate
        );

        if (alreadyReserved) {
            alert("Ten korepetytor jest już zajęty w tym terminie!");
            return;
        }

        const newReservation = {
            id: Date.now(),
            tutor: tutor.name,
            date: selectedDate,
            time: selectedTime,
            image: tutor.image,
            reason: reason,
            user: currentUser?.username
        };

        fetch("http://localhost:3000/reservation", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
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
        <RatingBox tutorId={tutor.id}/>
        <motion.div
            className="container"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 2}}
        >

            <h1>{tutor.name}</h1>

            <div className="container d-flex align-items-center">
                <img src={tutor.image} alt={tutor.name} style={{height: '300px', width: '300px'}}/>
                <div className="container align-items-center" style={{paddingBottom: '10px'}}>
                    <label htmlFor="datePicker">Wybierz dzień na który chcesz się umówić:</label>
                    <input
                        type="date"
                        id="datePicker"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="form-control w-25"
                    />
                    <br/>
                    <label htmlFor="timePicker">Wybierz godzinę na którą chcesz się umówić:</label>
                    <input
                        type="time"
                        id="timePicker"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="form-control w-25"
                    />
                    <br/>
                    <label htmlFor="reason">Napisz z czego chciałbyś korepetycje:</label>
                    <input
                        type="text"
                        id="reason"
                        onChange={(e) => setReason(e.target.value)}
                        className="form-control w-25"
                    />
                    <br/>
                    {currentUser ? (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={handleReservation}
                            className="btn btn-primary">
                            Zarezerwuj korepetycje
                        </motion.button>
                    ) : (
                        <p className="text-muted">Zaloguj się, aby zarezerwować</p>
                    )}
                </div>
            </div>
            <div className="container" style={{marginTop: '50px'}}>
                <p>O mnie: </p>
                <p>
                    {tutor.description}
                </p>
            </div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                type="button"
                className="btn btn-danger"
                style={{marginTop: '50px'}}
                onClick={() => navigate(`/reserve`)}
            >
                Powrót
            </motion.button>
        </motion.div>
    </>
}