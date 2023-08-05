import React, { useState } from 'react'

const initialData={title:"",
                    price:"",
                    image:""
                }
const ProductForm = ({handleSubmit}) => {
    const [formData, setFormData]=useState(initialData)
    
    const handleChange=(e)=>{
        setFormData({...formData, 
                    [e.target.name]:e.target.value})
    }
   const handleFormSubmit=(e)=>{
        e.preventDefault()
        handleSubmit(formData)
        setFormData(initialData)
   }
   
  return (
    <div>
     <form id='product-form' onSubmit={handleFormSubmit}>
     <label>Title : <br />
        <input 
            type="text"
            name="title" 
            value={formData.title}
            placeholder='Please Enter Title'
            onChange={handleChange}/>
      </label><br /><br />

      <label>Price : <br />
        <input 
            type="text"
            name="price" 
            placeholder='Please Enter Price'
            value={formData.price}
            onChange={handleChange}/>
      </label><br /><br />

      <label>ImageUrl : <br />
        <input 
            type="url"
            placeholder='Please Enter imageUrl'
            name="image" 
            value={formData.image}
            onChange={handleChange}/>
      </label><br /><br />

      <input type="submit" name="Submit Product"  />
     </form>
    </div>
  )
}

export default ProductForm
