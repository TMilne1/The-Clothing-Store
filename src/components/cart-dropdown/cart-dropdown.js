import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import{connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown =({cartItems, history, dispatch}) =>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { cartItems.length ?
                    cartItems.map( cartitem => (
                        <CartItem key={cartitem.id} item={cartitem}/>
                        )
                    ) 
                    : <span className='empty-message' >There isn't anything in your cart...yet!</span>
                
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden)
            }}
            >GO TO CHECKOUT</CustomButton >

        </div>
    )
}
const mapStateToProps =  createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));