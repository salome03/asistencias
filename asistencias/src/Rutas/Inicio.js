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
                if(error.code === 'auth/user-not-found'){
                    alert("El usuario no está registrado")
                }
                else{
                    if(error.code === 'auth/wrong-password'){
                        alert("La contraseña es incorrecta");
                    }
                    
                }
            } 
        })
    }
    return(
        <div className="form">
             <form onSubmit={Datos}>
             <label for="correo">Correo electrónico</label>
             <input id="correo" type="text" onChange={(e) => setEmail(e.target.value)}></input>
             <label for="pass">Contraseña</label>
             
             </form>
        </div>
    )
}