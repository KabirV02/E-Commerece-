import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
export default function Item(props) {
  return (
    <div className="item">
    <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
    <p>{props.name}</p>

    <div className="item-price">
        <div className="new-item-price">
           $ {props.new_price}
        </div>
        <div className="old-item-price">
            ${props.old_price}
        </div>
    </div>
    </div>
  )
}


