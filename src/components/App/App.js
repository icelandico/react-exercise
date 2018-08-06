import React, { Component } from 'react';
import './App.css';
import Parent from "../Parent/Parent";
import AppHeader from "../AppHeader/AppHeader";

class App extends Component {

  render() {
    return (
      <div>
        <AppHeader />
        <Parent />
      </div>
    );
  }
}

export default App;
