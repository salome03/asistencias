import React, { useState } from "react";
import '../Componentes/Styles/Registro.css';
import { auth } from "../fireBase-config";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const Registro = () => {

    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const Datos = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, usuario, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
    }
}