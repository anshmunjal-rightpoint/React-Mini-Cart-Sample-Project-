import React from 'react'
import './css/CartItem.css'

const CartItem = (props) => {
  return (
    <div className='cart'>
    <img src={props.item.image} alt="Product Image" />
    <span className="cart__product-title">{props.item.title}</span>
    <span>Price: ₹ {props.item.price}</span>
  </div>
  )
}

export default CartItem