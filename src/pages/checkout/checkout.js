import React from 'react'
import '../checkout/checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems, selectTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'


const Checkout =({itemsInCart, cartTotal})=>{
    return(
        <div className="checkout-page">
            <div className = "checkout-header">
                <div className="header-block">
                    <span>
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Description
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Quantity
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Price
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Remove
                    </span>
                </div>
            </div>
            {itemsInCart.map(item=> <CheckoutItem key={item.id} cartItem={item}/>
            )}
            <div className='total'>{`Total:$${cartTotal}`}</div>
            <div className='test-warning'>
            Please use the following test credit card information for payments:
            <br/>
            NUMBER: 4242-4242-4242-4242<br/>           
            BRAND: Visa	        &nbsp; &nbsp;
            CVC: Any 3 digits   &nbsp; &nbsp;
            EXP: Any future date

            <br/> <br/>
            
            </div>

            <StripeCheckoutButton/>
                
        </div>
    )
}
const mapStatetoProps = createStructuredSelector({
    itemsInCart: selectCartItems,
    cartTotal: selectTotal
})

export default connect(mapStatetoProps)(Checkout)