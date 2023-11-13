import React from "react";
import Salir from "./Salir";
import "./styles/Home.css";
import ScrollToSearchButton from "./Buscar";
import SearchBooks from "./Buscar";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Home = (props) => {
    return(
        <>
          <Menu></Menu>
          <div className="book-list">
          <div className="book">
            <img src="curso.jpg"  alt="curso 1" />
            <h2>Curso: 6</h2>
            <p>Divicion: 1</p>
            <p>Turno: Mañana</p>
          </div>

          <div className="book">
            <img src="curso.jpg" alt="curso 2" />
            <h2>Curso: 6</h2>
            <p>Divicion: 2</p>
            <p>Turno: Tarde</p>
          </div>
          


          
        </div>

        </>
    )
}

export default Home;