import React from 'react';
import './Person.css';
import Radium from "radium";
const Person=(props)=>{
    const style={
        '@media (min-width:500px)':{
            width:'450px',

    }
    }
    return(
        <div className="Person" style={style}>
            <h1 onClick={props.click}>Hello Iam {props.name} and I am {props.age} years old</h1>
            <p>{props.children}</p>
            {/*To get other elements of the tag*/}
            <input type="text" onChange={props.changes} value={props.name}/>
        </div>

    )
}

export default Radium(Person)