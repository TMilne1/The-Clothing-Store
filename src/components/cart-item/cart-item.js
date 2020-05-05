import React from 'react'
import './cart-item.styles.scss'

const CartItem =  ({item: {id, quantity, imageUrl,price, name}}) => {

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item'></img>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span>{quantity} x ${price}</span>
            </div>
            
        </div>
    )
}

export default CartItem;