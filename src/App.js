import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Persons/Person';
//import UserInput from "./UserInput";
//import UserOutput from "./UserOutput";

class App extends Component {
    /*state={
        username:"Chris"
    }*/
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

    nameChangesHandler=(event)=>{
        this.setState({
            persons:[
                {name:"Pooja",age:22},
                {name:event.target.value,age:20},
                {name:"Rajani",age:22}
            ]
        })
    }
    /*nameChangedHandler=(event)=>{
        this.setState({
            username:event.target.value
            }

        )
    }*/
  render() {
    const style={
          backgroundColor:'white',
          font:'inherit',
          border:'1 px solid blue',
          padding:'8px',
          cursor:'pointer'
        };
    return (
      <div className="App">
       <h1>Hello Iam React App</h1>
          <button
              style={style} onClick={this.switchNameHandler.bind(this,"Pooja A Shetty")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,"Pooja A Shetty!")} changes={this.nameChangesHandler}>Hobbies: Singing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          {/*<UserInput change={this.nameChangedHandler} name={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName="Steve"/>*/}
      </div>
    );
  }
}

export default App;
