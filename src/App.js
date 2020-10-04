import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles';
import CircleSelector from './components/CircleSelector';

const buttons = [1, 2, 3, 4];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selCircleIdx: 0
    };
  }
  handleCircleSelector = (circleIdx) => {
    this.setState({selCircleIdx: circleIdx});
    console.log(circleIdx);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            buttons={buttons}
            selCircleIdx={this.state.selCircleIdx}
            handleCircleSelector={this.handleCircleSelector}
          />
          <Circles
            buttons={buttons}
            selCircleIdx={this.state.selCircleIdx}
          />
        </main>
      </div>
    );
  }
}

export default App;