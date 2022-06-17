import React, { useContext } from 'react'
import { Rating } from 'react-simple-star-rating'
import { cartData } from '../../../App'
import './css/ItemCard.css'

const ItemCard = (props) => {
  const [cartProducts, setCartProducts] = useContext(cartData)
  const addToCartHandler = () => {
    const productData = {
      id: props.id,
      image: props.image,
      price: props.price,
      title: props.title
    }
    setCartProducts([...cartProducts, productData])
  }
  return (
    <div className='card'>
      <p className='product-category'>{props.category}</p>
      <hr />
      <img src={props.image} alt="Product Image" />
      <h2 className='product-title'>{props.title}</h2>
      <h3>Price: ₹ {props.price}</h3>
      <div className='customer-rating'>
        <Rating ratingValue={props.ratingValue} size={15} readonly />
        <p className='customer-rating__count'>Total Rating(s):{props.ratingCount} </p>
      </div>

      <button onClick={addToCartHandler}>Add to cart</button>
    </div>
  )
}

export default ItemCard