import React, { Component } from 'react';
//import logo from './logo.svg';
import Homepage from './pages/homepage/homepage.js';
import Shop from './pages/shop/shop';
import Header from './components/header/header'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import {auth} from './firebase/firbase.utils'


class App extends Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      console.log(user)
      this.setState({currentUser:user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={Shop} />
          {//<Route exact path='/contact' component={Contact} />
          }
          <Route exact path='/signIn' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
      
}

export default App;
