import React, { useContext } from 'react'
import { cartData } from '../../App'
import './css/Cart.css'

const Cart = () => {
  const [cartProducts, setCartProducts] = useContext(cartData)
  const test  =  <ul className='cart-wrapper'>
  <li className='cart-item-wrapper'>
    <p>Oops! your cart is empty.</p>
  </li>
</ul>


  if (cartProducts.length === 0) {
    return (
      test
    )
  }

  return (
    <ul className='cart-wrapper'>
      {cartProducts.map(cartProduct =>
        <React.Fragment key={cartProducts.id}>
          <li className='cart-item-wrapper'>
            <img src={cartProduct.image} alt="" />
            <div className='cart-item-wrapper__details'>
              <span>{cartProduct.title}</span>
              <p>Price: ₹{cartProduct.price}</p>
            </div>
          </li>

        </React.Fragment>
      )}
    </ul>
  )
}

export default Cart