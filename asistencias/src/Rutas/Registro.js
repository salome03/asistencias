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
            alert("Registrado correctamente");
        })
        .catch((error) => {
            console.log(error);
            if(error.code === 'auth/invalid-email'){
                alert("Ingrese un correo electrónico válido");
            }
            else{
                alert("Por favor, complete los campos correctamente");
            }
        })
    }

    return(
        <div className="form-registro">
             <form onSubmit={Datos}>
             <label for="correo">Correo electrónico</label>
             <input id="correo" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
             
             </form>
        </div>
    )
}