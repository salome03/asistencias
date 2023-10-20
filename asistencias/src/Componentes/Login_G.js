import React from "react";
import Google from './Img/Google.png';
import './styles/Boton_G.css';
import { auth } from "../fireBase-config";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

const BotonGoogle = () => {
    const Provider = new GoogleAuthProvider();
    const IniciarConGoogle = () => {
        signInWithPopup(auth, Provider)
        .then((result) => {
            alert("Logeado correctamente");
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return(
        <div className="boton-google">
            
        </div>
    )
}