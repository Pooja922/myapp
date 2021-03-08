import React from 'react';
import './Person.css';
const Person=(props)=>{
    return(
        <div className="Person">
            <h1 onClick={props.click}>Hello Iam {props.name} and I am {props.age} years old</h1>
            <p>{props.children}</p>
            {/*To get other elements of the tag*/}
            <input type="text" onChange={props.changes} value={props.name}/>
        </div>

    )
}

export default Person