import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import "./styles/Categorias.css"

const Categorias = () => {
  return (
    <div>
      <Menu></Menu>
      <div class="container">
    <div class="genre-box mystery">
      <p>Cursos</p>
    </div>
    <div class="genre-box romance">
      <p>Division</p>
    </div>
    <div class="genre-box fantasy">
      <p>Turno</p>
    </div>
    <div class="genre-box scifi">
      <p>Educacion Fisica</p>
    </div>
    <div class="genre-box thriller">
      <p>Taller</p>
    </div>
  </div>
    </div>
  )
}
export default Categorias;

