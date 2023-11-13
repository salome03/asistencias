import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebaseConfig";
import { Link } from "react-router-dom"
import EditarLibro from "./EditarCursos";
import EliminarLibro from "./EliminarCursos";

const ListarCursos = () => {

    const [Cursos, setCursos] = useState([]);

    useEffect(() => {
        const obtenerLibros = async () => {
            const querySnapshot = await getDocs(collection(db, "Cursos"));
            const CursosArray = [];
            querySnapshot.forEach((doc) => {
                CursosArray.push({ id: doc.id, ...doc.data() });
            });
            setCursos(CursosArray);
        };
        obtenerCursos();
    }, []);

    return(
        <div>
            <h1>Lista de Cursos</h1>
            <ul>
                {Cursos.map((Cursos) => (
                    <li key={Cursos.id}>
                        <strong>Año:</strong> {libro.Título}, <strong>Division:</strong> {libro.Autor}, <strong>Turno:</strong> {libro.Género}
                        <button><Link to={`/editar-cursos/${Cursos.id}`}>Modificar</Link></button>
                        <EliminarCursos CursosId={Cursos.id}/>
                    </li>
                ))}
            </ul>
            <button><Link to={"/agregar-Cursos"}>Agregar Cursos (+)</Link></button>
        </div>
    )
}

export default ListarCursos;