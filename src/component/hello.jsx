import React from 'react';
import { Link } from '@reach/router';

const Hello = props => {

    if(isNaN(props.id)){
        return(
            <>
            <h1>The word is {props.id}</h1>
            <Link to="/hello"></Link>
        </>
        )}
    else{
        return (
        <>
            <h1>The number is {props.id}</h1>
            <Link to="/number"></Link>
        </>
    );  
    }

    
}


export default Hello;