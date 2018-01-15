import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from 'components/InputBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-body">
          <InputBox
            name="Tone"
            filter={{
              id: 0,
              name: 'Tone',
              children: {
                negative: {id: 'negative', name: 'Negative', children: null, parentId: 0},
                positive: {id: 'positive', name: 'Positive', children: null, parentId: 0},
                neutral: {id: 'neutral', name: 'Neutral', children: null, parentId: 0}
              }
            }}
            multipleSelect={false}
            clearall
            search
            direction="horizontal"
            checkFilter={(name, filter, checked) => {
              console.log(this.state, name, filter, checked);
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
