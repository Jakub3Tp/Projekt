import pjedlikowski from "./assets/pjedlikowski.jpg";
import { useNavigate } from "react-router";

export default function Tutor() {
    const navigate = useNavigate();
    return <>
        <div className="container">
            <h1>Przemysław Pilikowki</h1>
            <img src={pjedlikowski} alt="Pan P" style={{height:'300px', width:'300px'}} />
            <button type="button" className="btn btn-primary" style={{marginLeft:"50px"}}>Zarezerwój korepetycje</button>
            <div className="container" style={{marginTop:'50px'}}>
                <p>O mnie: </p>
                <p>Jestem absolwentem informatyki technicznej na Politechnice Wrocławskiej - ukończyłem ją w 2021 r.
                    Podczas studiów zacząłem pracę w Katedrze Informatyki Technicznej tej uczelni jako administrator systemu Linux i pracowałem tam przez 5 lat.
                    Podczas studiów rozpocząłem także pracę jako nauczyciel przedmiotów zawodowych informatycznych w Technikum TEB Edukacja we Wrocławiu, gdzie do dziś pracuję.
                    Praca ta daje mi wiele satysfakcji i pozwala kształcić nowe pokolenia dobrze przygotowanych techników - a może kiedyś inżynierów - do pracy w tej dziedzinie.
                    Być może kiedyś zdecyduję się poznać korpo-świat IT :)

                </p>
            </div>

            <button type="button" className="btn btn-danger" style={{marginTop:'50px'}} onClick={() => navigate(`/reserve`)}>Powrót</button>
        </div>
    </>
}