import React from 'react';
import { Link } from '@reach/router';

const Home = props =>{
    

    return(
        <>
        <h1>"This is Home"</h1>
        <Link to="/home"></Link>
        </>
    );
}


export default Home;