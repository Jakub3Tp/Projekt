import { useEffect, useState } from "react";

export default function RatingBox({ tutorId }) {
    const [ratings, setRatings] = useState([]);
    const [currentRating, setCurrentRating] = useState("");

    useEffect(() => {
        const storedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
        if (storedRatings[tutorId]) {
            setRatings(storedRatings[tutorId]);
        }
    }, [tutorId]);

    const addRating = () => {
        if (currentRating.trim() === "") return;

        const updatedRatings = [...ratings, currentRating];
        setRatings(updatedRatings);
        setCurrentRating("");

        const storedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
        storedRatings[tutorId] = updatedRatings;
        localStorage.setItem("ratings", JSON.stringify(storedRatings));
    };

    return (
        <div style={{
            position: "absolute",
            top: "70px",
            right: "20px",
            width: "250px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "white"
        }}>
            <h5>Wystaw ocenę:</h5>
            <input
                type="text"
                value={currentRating}
                onChange={(e) => setCurrentRating(e.target.value)}
                className="form-control mb-2"
                placeholder="Wpisz ocenę..."
            />
            <button className="btn btn-primary w-100" onClick={addRating}>
                Dodaj
            </button>
            <hr />
            <h6>Wystawione oceny:</h6>
            <ul className="list-group">
                {ratings.map((rating, index) => (
                    <li key={index} className="list-group-item">{rating}</li>
                ))}
            </ul>
        </div>
    );
}
