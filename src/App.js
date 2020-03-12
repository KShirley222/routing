import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, navigate } from '@reach/router';
import Home from './component/home';
import Hello from './component/hello';
import Number from './component/number';
import WordColor from './component/wordcolor';

function App() {


  return (
    <>
    <Router>
      <Home path='/home/'/>
      
      <Hello path='/:id/'/>
      {/* <Number path='/:is/'/> */}

      <WordColor path='/:word/:text/:bg'/>
    </Router>
    </>
  );
}

export default App;
