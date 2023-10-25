import React, { useState } from "react";
import { auth } from "../fireBase-config";
import { signInWithEmailAndPassword } from "@firebase/auth";
import BotonGoogle from "../Componentes/Login_G";
import BotonGitHub from "../Componentes/Login_GHub";
import BotonAnonimo from "../Componentes/Login_A";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Datos = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            alert("Logeado correctamente");
        })
        .catch((error) => {
            console.log(error.code);
            if(error.code === 'auth/invalid-email'){
                alert("Ingrese un correo electrónico válido");
            }
            else{
                
            } 
        })
    }
}