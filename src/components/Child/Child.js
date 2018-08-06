import React, { Component } from 'react'
import '../Parent/Parent'

class Childnode extends Component {
  render() {

    return (
      <p>The value of input is: {this.props.value}</p>
    )
  }
}

export default Childnode