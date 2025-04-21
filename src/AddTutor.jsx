import {useState} from "react";
import { motion } from "framer-motion";

export default function AddTutor() {
    const [name, setName] = useState("");
    const [cdescription, setCdescription] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const generateId = () => {
        return Date.now().toString();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newId = generateId();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('cdescription', cdescription);
        formData.append('description', description);

        try {
            const uploadRes = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData
            });

            const data = await uploadRes.json();
            const imageUrl = data.imageUrl;

            fetch('http://localhost:3000/tutorCard', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: newId,
                    name,
                    image: imageUrl, // Zapisujemy URL obrazu
                    cdescription,
                })
            });

            fetch('http://localhost:3000/tutors', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: newId,
                    name,
                    image: imageUrl,
                    description,
                })
            });

            alert('Korepetytor dodany!');
        } catch (err) {
            console.error(err);
            alert('Błąd podczas dodawania.');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };


    return (
        <>
            <motion.div
                className="container mt-5"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
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
                            value={cdescription}
                            onChange={(e) => setCdescription(e.target.value)}
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
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                        {imageUrl && <img src={imageUrl} alt="Tutor" style={{width: 100, height: 100}}/>}
                    </div>
                    <div className="mt-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            type="submit"
                            className="btn btn-success"
                        >
                            Dodaj
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </>
    )
}