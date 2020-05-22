import React, { Component } from 'react';
//import logo from './logo.svg';
import Homepage from './pages/homepage/homepage.js';
import Shop from './pages/shop/shop';
import Header from './components/header/header'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector.js';
import {createStructuredSelector} from 'reselect'
import Checkout from './pages/checkout/checkout.js';



class App extends Component{


  unsubscribeFromAuth = null;
  

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapshot =>{
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          }) 
        })
      }else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={Shop} />
            {//<Route exact path='/contact' component={Contact} />
            }
          <Route exact path='/signin' 
            render= { 
              () =>
            (this.props.currentUser) ?
              (<Redirect to='/' />)
                :
              (<SignInAndSignUp/>) 
            }
          />
          <Route exact path='/checkout' component={Checkout}/>
        </Switch>
      </div>
    );
  }    
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
//connect first arg gets value, 2nd arg sets value



