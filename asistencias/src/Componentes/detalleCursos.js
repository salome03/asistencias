import React from "react";

const DetalleCursos = ({ Cursos }) => {
    return (
        <div>
          <h2>{Cursos.Cursos}</h2>
          <img src={Cursos.portada} alt={Cursos.Cursos} />
          <p>Curso: {Cursos.año}</p>
          <p>Division: {Cursos.sinopsis}</p>
          <p>Fecha de inicio: {Cursos.inicio}</p>
        </div>
    );
}
export default DetalleCursos;