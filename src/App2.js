import React, { useState } from "react";
import './App.css';


class Resultado extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valor: null, total: null, resetT: ()=> this.setState({total:null})}
    this.plusClick = this.plusClick.bind(this)
    this.cont = this.cont.bind(this)
  }

  cont(event) {
    this.setState({ total: Number(event.target.value) })
  }

  plusClick() {    
    document.getElementById("input").value=null;
    this.setState({ total: this.state.total + this.state.valor})
    
  }

  result(event) {
    document.querySelectorAll('input')
    this.setState({ total: null })
  }


  render() {
    return (
      <div>
        {/* <form onSubmit={(e) => {this.plusClick(e)}}></form> */}
        
        <input 
          id="input"
          type="text"
          value={this.state.valor}
          onChange={this.cont}        
        />

        <button onClick={this.plusClick} >+</button>    
        <button onClick={this.state.resetT}>Clear</button>
        <span>..... {this.state.total}</span>
      </div>
    )
  }
}

export default Resultado;



