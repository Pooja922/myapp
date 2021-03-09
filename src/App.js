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
            {id:123,name:"Pooja",age:21},
            {id:234,name:"Pallavi",age:20},
            {id:256,name:"Rajani",age:21}
            ],
    otherState:'Some Other value',
    showPersons:false
    }

    nameChangesHandler=(event,id)=> {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person ={ ...this.state.persons[personIndex]
    };
        //const person=Object.assign({},this.state.person[personIndex])
        person.name=event.target.value;
        const persons=[...this.state.persons];
        persons[personIndex]=person;

        this.setState({
            persons:persons
        })
    }

    /*nameChangedHandler=(event)=>{
        this.setState({
            username:event.target.value
            }

        )
    }*/

    deletePersonHandler=(personIndex)=>{
        //const persons=this.state.persons.slice()
        const persons=[...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons})
    }
    togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow})
    }
  render() {
    const style={
          backgroundColor:'green',
          color:'white',
          font:'inherit',
          border:'1 px solid blue',
          padding:'8px',
          cursor:'pointer'
        };
    let persons=null;
    if(this.state.showPersons){
        persons=(
            <div>
                {this.state.persons.map((person,index)=>{
                    return < Person click={()=>this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id} changes={(event)=>this.nameChangesHandler(event,person.id)}/>
                })}
            </div>

        );
        style.backgroundColor='red';
    }
    return (
      <div className="App">
       <h1>Hello Iam React App</h1>
          <button
              style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}

          {/*<UserInput change={this.nameChangedHandler} name={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName="Steve"/>*/}
      </div>
    );
  }
}

export default App;
