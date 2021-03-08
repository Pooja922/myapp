import React from 'react';
const Person=(props)=>{
    return(
        <div>
            <h1 onClick={props.click}>Hello Iam {props.name} and I am {props.age} years old</h1>
            <p>{props.children}</p>                                                                     {/*To get other elements of the tag*/}
        </div>

    )
}

export default Person