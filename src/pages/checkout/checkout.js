import React from 'react'
import '../checkout/checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems, selectTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item'


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
            <div className='total'>
                <span>{`Total:$${cartTotal}`}</span>
            </div>
        CHECKOUT
        </div>
    )
}
const mapStatetoProps = createStructuredSelector({
    itemsInCart: selectCartItems,
    cartTotal: selectTotal
})

export default connect(mapStatetoProps)(Checkout)