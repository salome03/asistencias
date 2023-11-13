import React, { useState, useEffect } from "react";
import { collection, getDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../components/firebaseConfig";
import { useParams, useNavigate } from "react-router-dom";

const EliminarCursos = ({ CursosId }) => {

    const BotonEliminar = async () => {
        try{
            const CursosRef = doc(db, "Cursos", CursosId);
            await deleteDoc(CursosRef);
            alert("Curso eliminado con éxito");
            window.location.reload();
        }
        catch(error){
            console.error("Error al eliminar el curso:", error);
        }
    };

    return(
        <div>
            <button onClick={BotonEliminar}>Eliminar</button>
        </div>
    )
}

export default EliminarCursos;