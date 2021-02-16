import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css"

export default function Nav () {
    return (
        <div className="cont">
           <Link className="blanco" to="/">
               <span>Home</span> 
            </Link>
           <Link className="blanco" to="/info">
           <span>Info</span> 
            </Link>  
           <Link className="blanco" to="/memes">
           <span>Memes</span> 
            </Link> 
        </div>

    )
}