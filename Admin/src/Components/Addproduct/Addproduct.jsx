import './Addproduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'

const Addproduct = () => {

    const [image,setImage] = useState(false)
    const [productDetails,setproductDetails] = useState({
        name:"",
        image:"",
        category:"womens",
        new_price:"",
        old_price:""

    })

    const imagehandler = (e)=>{
        setImage(e.target.files[0])

    }

    const changehandler = (e)=>{
        setproductDetails({
            ...productDetails,[e.target.name]:e.target.value
        })
    }

    const add_product = async()=>{

        console.log(productDetails)
        let responseData;
        let product = productDetails

        let formData = new FormData()
        formData.append('product',image)
        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        if(responseData.success){
            product.image = responseData.image_url
            console.log(product)
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',

                },
                body:JSON.stringify(product)
            }).then((resp)=> resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")

            })
        }
 }
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productDetails.name} onChange={changehandler} type='text' name='name' placeholder='Type here'/>
        </div>

        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changehandler} type="text" name='old_price' placeholder='Type here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changehandler} type="text" name='new_price' placeholder='Type here' />
            </div>
        </div>

        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changehandler} name="category" className='add-product-selector'>
                <option value="womens">Womens</option>
                <option value="mens">Mens</option>
                <option value="kids">Kids</option>
            </select>

        </div>

        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='addprodut-thumbnail-image' alt="" />
            </label>
            <input onChange={imagehandler} type="file" name='image' id="file-input" hidden />
        </div>
        <button onClick={()=>{add_product()}} className='addproduct-btn'> ADD</button>

    </div>
  )
}

export default Addproduct