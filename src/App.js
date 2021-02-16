import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Info from "./components/Info.js";
import Calc from "./components/Calc.js";
import Memes from "./components/Memes.js";

function Resultado() { 


  return (
    <div>
      <Route
        path="/"
        component={Nav}
      />
      <div>
      <Route
        path="/info"
        component={Info}
      />
      <Route
        exact path="/"
        component={Calc}        
      />
      <Route
        exact path="/memes"
        component={Memes} 
      />
      </div>     
    </div>
  )
}

export default Resultado;



