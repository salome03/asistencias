import React from "react";
import Anonimo from "./Img/Anonimo.png";
import { auth } from "../fireBase-config";
import { signInAnonymously } from "firebase/auth";

const BotonAnonimo = () => {
    const IniciarAnonimo = () => {
        signInAnonymously(auth)
        .then((result) => {
            alert("Ingresó correctamente");
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return(
        <div className="boton-anonimo">
            
        </div>
    )
}