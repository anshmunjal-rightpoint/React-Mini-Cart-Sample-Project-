import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard/ItemCard'
import Loader from './Loader/Loader'
import './css/ItemList.css'

function ItemList() {
  const [items, setItem] = useState([])
  const [loader, showLoader] = useState(true)

  useEffect(() => {
    showLoader(true)
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        showLoader(false)
        setItem(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  return (
    <div className='wrapper'>
      {loader ? <Loader/>
        : <>
          {
            items.map(item =>
              <React.Fragment key={item.id}>
                <ItemCard
                id={item.id} 
                  category={item.category}
                  image={item.image}
                  title={item.title}
                  price={parseInt(item.price*78)}
                  ratingValue={(item.rating.rate / 5) * 100}
                  ratingCount={item.rating.count}
                />
              </React.Fragment >
            )
          }
        </>
      }
    </div>
  )
}

export default ItemList
