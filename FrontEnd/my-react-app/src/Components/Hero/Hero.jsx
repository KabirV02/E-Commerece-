import React from 'react'
import './Hero.css'
import handIcon from '../Images/hand-icon.png'
import heroImage from '../Images/heroImage.png'
import arrowIcon from '../Images/right-arrow.png'
export default function Hero() {
  return (
    <div className='hero'>
     <div className="hero-left">
      <h2>
        New Arrivals Only
      </h2>
   <div>
     <div className="hand-hand-icon">
      <p>New</p>
      <img  className='handicon'src={handIcon}alt="hand icon" />
      </div>
      <p>Collection</p>
      <p>for everyone</p>
     </div>
     <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img className='arrowIcon' src={arrowIcon}  alt="arrow icon" />
     </div>
 </div>
     <div className="hero-right">
           
           <img className='heroImage' src={heroImage} alt="heroimage" />

     </div>
    </div>
  )
}
