import React, { useState, useEffect } from "react";
import { collection, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../components/firebaseConfig";
import { useParams, useNavigate } from "react-router-dom";

const EditarCursos = () => {

    const { CursosId } = useParams();

    const navigate = useNavigate();

    const [Cursos, setCursos] = useState({});
    const [nuevoAño, setNuevoAño] = useState("");
    const [nuevoTurno, setNuevoTurno] = useState("");
    const [nuevoPreceptor, setNuevoPrecetor] = useState("");

    useEffect(() => {
        const obtenerCursos = async () => {
            const docRef = doc(db, "Cursos", CursosId);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setLibro({ id: docSnap.id, ...docSnap.data() });
            }else{
                console.log("Error al encontrar el curso");
            }
        };
        obtenerCursos();
    }, [CursosId]);

    const GuardarCambios = async () => {
        try{
            await updateDoc(doc(db, "Cursos", CursosId), {
                Curso: nuevoCursos,
                Divison: nuevoDivision,
                Turno: nuevoTurno,
            });
            alert("Curso actualizado correctamente");
            navigate("/listar-Cursos");
        }catch(error){
            console.error("Error al actualizar curso: ", error);
        }
    };

    return(
        <div>
            <input
                type="text"
                placeholder="Actualizar curso"
                value={nuevoCursos}
                onChange={(e) => setNuevoCursos(e.target.value)}
            />
            <input
                type="text"
                placeholder="Actualizar division"
                value={nuevoDivision}
                onChange={(e) => setNuevoDivision(e.target.value)}
            />
            <select value={nuevoTurno} onChange={(e) => setNuevoTurno(e.target.value)}>
                <option>Seleccionar género</option>
                <option value="Mañana">Mañana</option>
                <option value="Tarde">Tarde</option>
                <option value="Vespertino">Vespertino</option>
            </select>
            <button onClick={GuardarCambios}>Actualizar curso</button>
        </div>
    )
}

export default EditarCursos;