import React from "react";
import{Link} from "react-router-dom"
import '../App.css'

const Header = () => {
  return (
    <header className="header">
    <span>Grupo 24</span>
    <nav>
        <ul>
            <Link to="/"><li>Inicio</li></Link>
           <Link to="/git"><li>Git</li></Link> 
            <Link to="/pokemon"><li>Pokemon</li></Link>
            <Link to="/banderas"><li>Banderas</li></Link>
        </ul>
    </nav>
  </header>
  );
};

export default Header;
