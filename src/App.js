import React from 'react';
//import logo from './logo.svg';
import Homepage from './pages/homepage/homepage.js';
import Shop from './pages/shop/shop';
import './App.css'
import {Switch, Route} from 'react-router-dom'




function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
