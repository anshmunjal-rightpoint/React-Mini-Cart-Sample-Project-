import React, { useContext, useState } from 'react'
import { cartData } from '../../App'
import Cart from '../Cart/Cart.js'
import './css/Header.css'

const Header = (props) => {
    const [cartMenu, showCartMenu] =useState(false)
    const [cartProducts, setCartProducts] = useContext(cartData)

    const cartVisibilityHandler = () => {
        showCartMenu(!cartMenu)
    }
    return (
        <div className='heading-wrapper'>
            <h1>Welcome to InstaCart</h1>
            <button onClick={cartVisibilityHandler}>Cart Items: {cartProducts.length}</button>
            {cartMenu &&< Cart/>}
        </div>

    )
}

export default Header