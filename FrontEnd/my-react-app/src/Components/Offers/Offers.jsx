import React from 'react'
import './Offers.css'
//import offerimage from '../Images/offersImage/offerImage1copy.png'
import offerimage2 from '../Images/offersImage/offerImage1.png'

export default function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
           <h1>Exclusive</h1>
           <h1>Offers For You</h1>
           <p>ONLY ON BEST SELLERS PRODUCT</p>
           <button className='checkNow'>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={offerimage2} alt="" />
        </div>
    </div>
  )
}
