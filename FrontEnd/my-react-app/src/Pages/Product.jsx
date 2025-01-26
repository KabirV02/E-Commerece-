import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'


import Breakcrum from '../Components/Breakcrum/Breakcrum';
import Productdisplay from '../Components/Productdisplay/Productdisplay'
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import Relatedproduct from '../Components/Relatedproduct/Relatedproduct';
export default function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id===Number(productId))
  return (
    <div >
      <Breakcrum product={product}/>
      <Productdisplay product = {product}/>
      <Descriptionbox/>
      <Relatedproduct/>
    </div>
  )
}
