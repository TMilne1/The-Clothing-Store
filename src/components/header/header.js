import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../../src/assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import Cart from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

const Header =({currentUser, cartHidden})=>{
        return(
           
            <div className='header'>
                
                <Link className='logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className='options'>
                    <Link className='option' to='/shop'>SHOP</Link>
                    <Link className='option' to='/contact'>CONTACT</Link>
                    
                
                {
                    currentUser ?
                        <div className='option' onClick={()=>auth.signOut()}>SIGN OUT </div>
                        :
                        <Link className='option' to='/signin'>SIGN IN</Link>
                }
                    <Cart />
                </div>
                {cartHidden ? null :
                <CartDropdown></CartDropdown>
                }

            </div>
        )
    

};

//getting currentUser from reducer through connect
const mapStateToProps = state =>({
    currentUser:state.user.currentUser,
    cartHidden:state.cart.hidden
});

export default connect(mapStateToProps)(Header);