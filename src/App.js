import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles';
import CircleSelector from './components/CircleSelector';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selCircle: 1
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector selCircle={this.state.selCircle} />
          <Circles />
        </main>
      </div>
    );
  }
}

export default App;