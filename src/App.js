import React, { Component } from 'react';
import './App.css';
import NewComp from "./NewComp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Why hello there</h1>
        <NewComp />
      </div>
    )
  }
}

export default App;
