import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Persons/Person';
//import styled from "styled-components"
//import Radium, {StyleRoot} from "radium";
//import UserInput from "./UserInput";
//import UserOutput from "./UserOutput";

/*
const StyledButton=styled.button`
          background-color: ${props => props.alt? 'red':'green'};
          color:white;
          font:inherit;
          border:1px solid blue;
          padding:8px;
          cursor:pointer;
          &:hover{
              background-color:lightgreen;
              color:black;}`
*/

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
    /*const style={
    backgroundColor:'green',
          color:'white',
          font:'inherit',
          border:'1px solid blue',
          padding:'8px',
          cursor:'pointer',
          ':hover':{
              backgroundColor:'lightgreen',
              color:'black'}

          }
        }; //Radium styling*/
      let btnClass=""
    let persons=null;
    if(this.state.showPersons){
        persons=(
            <div>
                {this.state.persons.map((person,index)=>{
                    return < Person click={()=>this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id} changes={(event)=>this.nameChangesHandler(event,person.id)}/>
                })}
            </div>

        );
        /*style.backgroundColor='red';
        style[':hover']={
            backgroundColor: 'salmon',
            color:'black'
        }*/
        btnClass=classes.Red
    }

    const assignedclasses=[];
    if(this.state.persons.length<=2){
        assignedclasses.push('red');
    }
    if(this.state.persons.length<=1){
        assignedclasses.push('bold')
    }
    return (
      <div className={classes.App}>
       <h1>Hello Iam React App</h1>
          <p className={assignedclasses.join(' ')}>This really works</p>
          {/*<StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Persons</StyledButton>*/}
          <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
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
// export default Radium(App);                 {/*higher order component*/}
