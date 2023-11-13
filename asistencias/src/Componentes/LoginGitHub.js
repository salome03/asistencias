import React from "react";
import GitHub from './images/GitHub.png';
import './styles/BotonGitHub.css';
import { auth } from "../components/firebaseConfig";
import { GithubAuthProvider, signInWithPopup } from "@firebase/auth";

const BotonGitHub = () => {

    const Provider = new GithubAuthProvider();

    const IniciarConGitHub = () => {
        signInWithPopup(auth, Provider)
            .then((result) => {
                alert("Logeado correctamente");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return(
        <div className="boton-github">
            <button onClick={IniciarConGitHub}><img src={GitHub}></img>Continuar con GitHub</button>
        </div>
    )
}

export default BotonGitHub;