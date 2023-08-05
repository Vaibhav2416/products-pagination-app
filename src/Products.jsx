import React from 'react'

const Products = ({image, title, price}) => {
  return (
    <div>
      <img src={image} alt="" width="200px" height="200px"/>
      <h3>{title}</h3>
      <h4>{price}</h4>
    </div>
  )
}

export default Products
