import React from "react";
import {Link } from "react-router-dom";

const Navbar = () => {
    return(
        
        <ul>
        <li>
        <Link to="/Contacto" className="nav-link">contacto</Link>
        </li>
        <li>
        <Link to="/Productos" className="nav-link">produtos</Link>
        </li>


        </ul>


    )}


export default Navbar