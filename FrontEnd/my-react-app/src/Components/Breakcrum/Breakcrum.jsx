import React from 'react'
import './Breakcrum.css'
import arrow_icon from '../Images/right-arrow.png'
export default function Breakcrum(props) {
    const {product} = props
  return (
    <div className='breakcrum'>
        Home <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}
