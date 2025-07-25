import React, { useContext }from 'react'
import '../Pages/CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

const ShopCategory=(props)=> {
  const {all_product}= useContext(ShopContext)
  
  //console.log("Category from props:",props.category)
  return (
   <div className='shop-category'>
     
     <img className='shopCategory-banner' src={props.banner} alt="" />
         <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span>out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <i class="fa-solid fa-caret-down fa-xl"></i>
          </div>
         </div>
         <div className="shopcategory-products">
         {all_product.map((item, i) => {
        console.log(`Checking category: props.category = ${props.category}, item.category = ${item.category}`);
        
        // Apply case-insensitive category matching
        if (props.category  === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        } else {
            console.log("Skipping item due to category mismatch:", item.name);
            return null;
        }
    })}
         </div>
         <div className="shopcategory-loadMore">
          Explore More
         </div>
   </div>
  )
}
export default ShopCategory
