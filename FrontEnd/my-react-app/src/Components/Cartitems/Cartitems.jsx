import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'

export default function Cartitems() {
 
    const { getTotalCartAmount,all_product,cartItem,removeFromcart} = useContext(ShopContext)
 
    return (
    <div className='cartitems'>
 <div className="cartitems-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
    
 </div>
    <hr />

          {all_product.map((e)=>{
            if(cartItem[e.id]>0){
                return   (<div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
             <img src={e.image}alt="" className='carticon-product-icon' />
             <p>{e.name}</p>
             <p>{e.new_price}</p>
             <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                <p>${e.new_price*cartItem[e.id]}</p>
                <img src="" className='cartitems-remove-icon' onClick={()=>{removeFromcart(e.id)}} alt="removeicon"  />
                
                </div>
                <hr />
                </div>)
            }
            else{
                return null
            }
            
          })}
         

          <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>

                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed To Checkout</button>
            </div>
            <div className="cartitem-promocode">
                <p>If you have promocode</p>
                <div className="cartitems-promobox">
                    <input type="text" name="" id="" placeholder='promocode' />
                    <button>Submit</button>
                </div>
            </div>
          </div>
    </div>
  )
}
