import { useEffect, useState } from 'react'
import './Listproduct.css'
import crossicon from '../../assets/cross_icon.png'

const Listproduct = () => {

    const [allproducts,setallproducts] = useState([])

    const fetchInfo = async ()=>{
      await fetch('http://localhost:4000/allproducts')
      .then((resp)=>resp.json())
      .then((data)=>{ setallproducts(data)})
    }

  useEffect(()=>{
    fetchInfo()
  },[])

  const removeProduct=async (id)=>{

    await fetch('http://localhost:4000/removeproduct',{
      method:"POST",
      headers:{
        Accept:'application/JSON',
        'Content-Type':'application/JSON'

      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo()

  }

  return (
    <div className="list-product">

        <h1>All Product</h1>
        <div className="listproduct-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div  className="listproduct-allproducts">
          <hr />
     {allproducts.map((product,index)=>{
      return <>
      <div key={index} className="listproduct-format-main listproduct-format">
             
        <img src={product.image} alt="" className="listproduct-product-icon" />
        <p>{product.name}</p>
        <p>${product.old_price}</p>
        <p>${product.new_price}</p>
        <p>{product.category}</p>
        <img onClick={()=>{
          removeProduct(product.id)}} src={crossicon} alt="" className='listproduct-remove-icon' />

      </div>
      <hr />
      </>

     })}
        </div>

    </div>
  )
}

export default Listproduct