import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='news-letter'>
         <h1>Get Exclusive Offers Your Email</h1>
         
         <p>Subsrcibe to our newsletter and stay updated</p>
         <div className='email-box'>
            <input type="text" placeholder='Your Email id' />
             <button>Subscribe</button>
         </div>
    </div>
  )
}
