import {useState} from "react";

export default function AddTutor() {
    const [name, setName] = useState("");
    const [cardDesc, setCardDesc] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);


        const newTutor = {
            name,
            description,
            image: image ? URL.createObjectURL(image) : '',
        };

        const newCard = {
            name,
            cardDesc,
            image: image ? URL.createObjectURL(image) : '',
        }
        try {
            await fetch("http://localhost:3000/tutorCard", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newCard),
            });

            await fetch("http://localhost:3000/tutors", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newTutor),
            });

            alert("Dodane Korepetytora.");
            setName('');
            setDescription('');
            setCardDesc('')
            setImage(null);

        } catch (error) {
            console.error('Błąd dodawania korepetytora:', error)
        }
    };

    return (
        <>
            <div className="container mt-5">
                <h2>Dodaj Korepetytora</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <label className="form-label">Imię i nazwisko:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Opis na karte:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={cardDesc}
                            onChange={(e) => setCardDesc(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Opis Ogólny:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Zdjęcie:</label>
                        <input
                            type="file"
                            className="form-control"
                            onChange={handleImage}
                            accept="image/*"
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="btn btn-success">Dodaj</button>
                    </div>
                </form>
            </div>
        </>
    )
}