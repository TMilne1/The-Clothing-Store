import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import{connect} from 'react-redux'

const CartDropdown =({cartItems}) =>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { 
                    cartItems.map( cartitem => (
                        <CartItem key={cartitem.id} item={cartitem}/>
                        )
                    ) 
                }
            </div>
            <CustomButton >GO TO CHECKOUT</CustomButton>

        </div>
    )
}
const mapStateToProps =(state)=>({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps, null)(CartDropdown);