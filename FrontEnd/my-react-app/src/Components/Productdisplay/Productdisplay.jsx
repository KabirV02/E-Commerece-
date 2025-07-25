import React, { useContext } from 'react'
import './Productdisplay.css'
import glow_star from '../Images/Ratings/Glowstar.png'
//import dull_star from '../Images/Ratings/Dullstar.png'
import { ShopContext } from '../../Context/ShopContext'
export default function Productdisplay(props) {
  
  const {product} = props
  const {addTocart} = useContext(ShopContext)
    return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
             <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        </div>
        <div className="productdisplay-right">
    <h1>{product.name}</h1>
    <div className="productdisplay-right-star">
        <img src={glow_star} alt="" />
        <img src={glow_star} alt="" />
        <img src={glow_star} alt="" />
        <img src={glow_star} alt="" />
        <img src={glow_star} alt="" />
      
        <p>(122)</p>
    </div>
    <div className="productdisplay-right-prices">
      <div className="productdisplay-right-price-old"> ${product.old_price}</div>
      <div className="productdisplay-right-price-new"> ${product.new_price}</div>
      </div>
      <div className="productdisplay-right-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam deserunt, cumque reiciendis sequi hic, praesentium officia voluptatem ipsam quod animi molestias quaerat cupiditate sit dicta delectus voluptatibus! Repellat, provident laudantium. 
      </div>
      <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>Xl</div>
          <div>XXl</div>
        
        </div>

      </div>
      <button onClick={()=>{addTocart(product.id)}}>Add to Cart</button>
      <p className='productdisplay-right-category'><span>Category:</span>Women,TShirt,Croptop</p>
      <p className='productdisplay-right-category'><span> Tags:</span>Moder Latest</p>
   
    </div>
    </div>
  )
}
