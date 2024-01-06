import React from "react";
import{Link} from "react-router-dom"


const Header = () => {
  return (
    <header className="header">
    <span>Logo</span>
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
