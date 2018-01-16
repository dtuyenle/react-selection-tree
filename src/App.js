import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from 'components/InputBox';

class App extends Component {
  render() {
    const data = {
      id: 0,
      name: 'Tone',
      children: {
        negative: {
          id: 'negative',
          name: 'Negative',
          children: {
            negative1: {
              id: 'negative1',
              name: 'Negative1',
              children: null,
              parentId: 'negative'
            },
            negative2: {
              id: 'negative2',
              name: 'Negative2',
              children: null,
              parentId: 'negative'
            }
          },
          parentId: 0
        },
        positive: {
          id: 'positive',
          name: 'Positive',
          children: null,
          parentId: 0
        },
        neutral: {id: 'neutral', name: 'Neutral', children: null, parentId: 0}
      }
    };
    data.children.negative.children.negative1.parent = data.children.negative;
    data.children.negative.children.negative2.parent = data.children.negative;
    console.log(data);
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
            filter={data}
            multipleSelect={false}
            clearall
            search
            direction="vertical"
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
