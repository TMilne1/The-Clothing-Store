import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import logo from '../../../src/assets/crown.svg';

const StripeCheckoutButton =({price})=>{
    const paymentInCents = price * 100
    const publishableKey = 'pk_test_SQEZppCBHdIEESDNWgVQmKOh005MysFOXF'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            currency='USD'
            label='Pay Now'
            name='Clothing Store'
            billingAddress
            shippingAddress
            image = {logo}
            descripton = {`Your total is $${price}`}
            amount = {paymentInCents}
            panellabel = 'Pay Now'
            token={onToken}
            stripeKey = {publishableKey}

        />
    )
}

export default StripeCheckoutButton;