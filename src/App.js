import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Persons/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Iam React App</h1>
        <Person name="Pooja" age="21"/>
        <Person name="Pallavi" age="20">Hobbies: Singing</Person>
          <Person name="Rajani" age="21"></Person>
      </div>
    );
  }
}

export default App;
