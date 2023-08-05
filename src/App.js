import { useEffect, useState } from 'react';
import './App.css';
import ProductForm from './ProductForm';
import Products from './Products';
import { Pagination } from './Pagination';

function App() {
  const [data, setData]=useState([])
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState(false)
  const [page, setPage]=useState(1)
  const [totalPages, setTotalPages]=useState(1)
  const [sortPrice, setsortPrice]=useState("")

  const getData=async(url)=>{
    try {
      let resp=await fetch(url)
    let respp=await resp.json()
    setData(respp)
    setLoading(false)
    console.log()
    setTotalPages(resp.headers.get("X-Total-Count"))
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }


  const handleSubmit=async(formData)=>{
    
    setLoading(true)
    try {
          await fetch("http://localhost:3001/products",{
              method: "POST",
              headers: {"Content-Type": "application/json",},
              body:JSON.stringify(formData)
          })
          setLoading(false)
          getData()
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  useEffect(()=>{
    let url=`http://localhost:3001/products`
    if(sortPrice){
      console.log(sortPrice)
      url=url+`?_sort=price&_order=${sortPrice}&_page=${page}&_limit=3`
      console.log(url)
    }
    else{
      url=url+`?_page=${page}&_limit=3`
    }
   
    getData(url)
  },[page,sortPrice])

  const handlePagination=(value)=>{
    setPage(page+value)
  }

  return ( loading ? <h1>Loading</h1> : error ? <h1>Error in Page</h1> :  <div className="App">
  <h1>Product Form</h1>
  <ProductForm handleSubmit={handleSubmit} />
  <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
    <div>
      <select value={sortPrice} onChange={(e)=>setsortPrice(e.target.value)}>
      <option value="" >Sort By Price</option>
        <option value="asc" >Increasing</option>
        <option value="desc">Decreasing</option>
      </select>
    </div>
  {
     data.map((item)=>{
      return  <Products key={item.id} {...item}/>
    })
  }
  </div>
  <div>
    <Pagination handlePagination={handlePagination} page={page} totalPages={totalPages}/>
  </div>
</div>
   
  );
}

export default App;
