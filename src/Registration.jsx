import {NavLink} from "react-router";
import Login from "./Login.jsx";

export default function Registration() {
    return <>
        <div className="container d-flex justify-content-center text-center">
            <h1>Rejestracja</h1>
        </div>
        <div className="container col-4">
            <form>
                <div className="form-outline mb-4">
                    <input type="text" className="form-control form-control-lg" placeholder="Imie"/>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" className="form-control form-control-lg" placeholder="Nazwisko"/>
                </div>

                <div className="form-outline mb-4">
                    <input type="email" className="form-control form-control-lg" placeholder="Email"/>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" className="form-control form-control-lg" placeholder="Hasło"/>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" className="form-control form-control-lg" placeholder="Powtórz hasło"/>
                </div>

                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                        <b style={{color: "White"}}>Utwórz konto</b>
                    </button>
                </div>

                <div className="d-flex justify-content-center" style={{paddingTop: '20px'}}>
                    <button type="button" className="btn btn-block btn-lg gradient-custom-4 text-body" style={{ backgroundColor: 'purple' }}>
                        <b style={{color: "White"}}>Utwórz konto przez Discord</b>
                    </button>
                </div>
            </form>
        </div>
    </>
}