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
    switchNameHandler=(newName)=>{
        this.setState({
            persons:[
                {name:newName,age:21},
                {name:"Pallavi",age:20},
                {name:"Rajani",age:22}
            ]
        })

    }


  render() {
    return (
      <div className="App">
        <h1>Hello Iam React App</h1>
          <button onClick={()=>this.switchNameHandler.bind(this,"Pooja A Shetty")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,"Pooja A Shetty!")}>Hobbies: Singing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
