import React from 'react';
import { Link } from '@reach/router';

const WordColor = props =>{

    return(
        <>
        <div style = {{color:props.text, backgroundColor:props.bg }}>The Word is : {props.word}</div>
        <Link to="/wordcolor"></Link>
        </>
    );
}


export default WordColor;