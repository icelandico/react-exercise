import React, { Component } from 'react'
import './AppHeader.css'

class AppHeader extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>{this.props.content}</h3>
      </div>
    )
  }
}

AppHeader.defaultProps = {
  title:'Hello',
  content: 'This is my content'
};

export default AppHeader