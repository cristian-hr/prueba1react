import React from "react";
import { useState } from "react"
import "./Calc.css"

export default function Calc() {

    const [state, setState] = useState({ valor: "", cont: "", suma: "", resta: "", total: "", error: undefined });
    
    function Cont(event) {
        setState({ cont: event.target.value })
        let str = event.target.value
        console.log(str.length)

        var oper = ["+","-","*","x","/"]

        if (str.length > 3) {
            setState({error: "Ingrese solo números de un dígito"});
        } 
        else if (str[0] == undefined){
            setState({error: ""});
        }
        else if (!(oper.indexOf(str[str.length-1])+1) && !(Number(str[str.length-1])/1 == Number(str[str.length-1]))) {
            setState({error: "No ingrese letras"});
        }
        console.log(state.error)   

        //   if(!event.target.value){
        //     setState({total: Number(state.total)})
        //   } else if (!state.total){
        //   setState({total: event.target.value})   
        //   } else {
        //   setState({total:event.target.value})
        // }
    } 

    function Suma(event) {

        setState({ suma: Number(state.cont) })
        state.total = Number(state.cont)
        console.log(event.target.value)
    }

    function ResetT() {
        document.getElementById("input").value=null;
        setState({ total: null })
    }

    function Igual() {
        console.log(state.cont)
        if (state.cont[1] == "+") {
            setState({ total: Number(state.cont[0]) + Number(state.cont[2]) })
        }
        else if (state.cont[1] == "-") {
            setState({ total: Number(state.cont[0]) - Number(state.cont[2]) })
        }
        else if (state.cont[1] == "*" || state.cont[1] == "x") {
            setState({ total: Number(state.cont[0]) * Number(state.cont[2]) })
        }
        else if (state.cont[1] == "/") {
            setState({ total: Number(state.cont[0]) / Number(state.cont[2]) })
        }
    }
    return (
        <div className="contcalc"> Calculadora de 1 dígito
            <div>
            <div className="calc">
                <div>
                <input id="input" type="text" value={state.valor} onChange={Cont}></input>
                {state.error && <p className="error">{state.error}</p>}
                </div>
                <input className="btnC" type="submit" onClick={ResetT} value="Clear"></input>
                <input className="btnC" type="submit" onClick={Igual} value="Igual"></input>
            </div>
                <span>{state.total}</span>
            </div>
        </div>

    )
}