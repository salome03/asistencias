import logo from './logo.svg';
import './App.css';
import LogoApp from './Componentes/Logo_App';
import BotonLogin from './Componentes/BLogin';
import Registro from './Rutas/Registro';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

function App() {
    return (
        <div>
             <LogoApp/>
             <BrowserRouter>
             <NavLink to='/login'><BotonLogin texto='Iniciar sesión'/></NavLink>
             <NavLink to='/registro'><BotonLogin texto='Registrarse'/></NavLink>
             <Routes>
                
             </Routes>
             </BrowserRouter>
        </div>
        
    )
}