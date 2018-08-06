import React, { Component } from 'react'
import '../Child/Child'
import Childnode from "../Child/Child";

class Parent extends Component {

  state = {
    number: 0,
    numberForChild: 0,
    formValue: 0
  };

  changeNodeValue = () => {
    this.setState({
      numberForChild: this.state.number,
      formValue: 0
    })
  };

  numberChanger = (event) => {
    this.setState({
      number: event.target.value,
      formValue: event.target.value
    })
  };

  clearNodeValue = () => {
    this.setState({
      numberForChild: 0
    })
  };

  render() {
    return (
      <div>
        <input type="number" onChange={ (event) => this.numberChanger(event) } value={this.state.formValue}/>
        <button onClick={this.changeNodeValue}>Add Value to Childnode</button>
        <button onClick={this.clearNodeValue}>Reset Childnode</button>
        <Childnode value={this.state.numberForChild}/>
      </div>
    )
  }
}

export default Parent