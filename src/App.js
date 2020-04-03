import React from 'react';
//import logo from './logo.svg';
import Homepage from './pages/homepage/homepage.js';
import './App.css'
import {Switch, Route} from 'react-router-dom'

const HatsPage =()=>{
  return(
    <div>
    <h1>HatsPage</h1>
    </div>
  )
}


function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
