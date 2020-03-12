import React from 'react';
import { Link } from '@reach/router';

const Number = props =>{
    

    return(
        <>
        <h1>The number is {props.is}</h1>
        <Link to="/number"></Link>
        </>
    );
}


export default Number;