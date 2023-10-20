import React from "react";
import GitHub from './Img/GitHub.png';
import './styles/Boton_GHub.css';
import { auth } from "../fireBase-config";
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
        
    )
}