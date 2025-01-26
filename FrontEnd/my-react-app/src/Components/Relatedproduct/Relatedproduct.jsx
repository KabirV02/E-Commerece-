import React from 'react'
import './Relatedproduct.css'
import relatedProduct_Collection from '../Assets/relatedproduct'
import Item from '../Item/Item'
export default function Relatedproduct() {
  return (
    <div className='relatedproduct'>
        <h1>Relatedproducts</h1>
        <hr />
        <div className="relatedproduct-item">
         {relatedProduct_Collection.map((item,i)=>{
            return <Item key={i} id= {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         })}
        </div>
    </div>
  )
}
