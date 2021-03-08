import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Persons/Person';

class App extends Component {
    state={
        persons:[
            {name:"Pooja",age:21},
            {name:"Pallavi",age:20},
            {name:"Rajani",age:21}
            ]
    }
    switchNameHandler=()=>{
        this.setState({
            persons:[
                {name:"Pooja A Shetty",age:21},
                {name:"Pallavi",age:20},
                {name:"Rajani",age:22}
            ]
        })

    }


  render() {
    return (
      <div className="App">
        <h1>Hello Iam React App</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Singing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
