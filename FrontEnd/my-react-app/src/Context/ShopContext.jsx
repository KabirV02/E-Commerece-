import React, { createContext,useEffect, useState } from "react";
//import men_data from "../Components/Assets/allproduct_data";
 export const ShopContext = createContext(null)

 const defaultCart = ()=>{
    let cart = {}
    for(let index=0;index<300+1;index++){
        cart[index] = 0;
    }
    return cart

 }
 
const ShopContextProvider=(props)=>{
    const [all_product,setAll_Product]  =useState([])
    const [cartItem,setcartItem] = useState(defaultCart())


    useEffect(()=>{

        fetch('http://localhost:4000/allproducts')
        .then((response)=> response.json())
        .then((data)=>{
            
            setAll_Product(data)
          
        })

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:"POST",
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    "Content-Type":'application/json',
                },
                body:"",

            }).then((response)=>response.json()).then((data)=>setcartItem(data))
        }
            

    },[])

    function addTocart(itemId){
        
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    "Content-Type":'application/json',

                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>{response.json()})
            .then((data)=>{console.log(data)})

        }
        
        
    }
    
     
    const removeFromcart = (itemId)=>{
        
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    "Content-Type":'application/json',

                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>{response.json()})
            .then((data)=>{console.log(data)})

        }
    }

    const getTotalCartAmount = ()=>{
        
        let totalAmount =0;
        for(const item in cartItem){
            if(cartItem[item]>0){
   
                 let itemInfo = all_product.find((product)=>product.id===Number(item))
                        totalAmount += itemInfo.new_price*cartItem[item]
            }
            
        }
        return totalAmount
    }

    const getTotalCartAmountItems = ()=>{
             
        let totalItems = 0;
        for(const items in cartItem){
            if(cartItem[items]>0){
                totalItems += cartItem[items]
            }
        }
        return totalItems
    }
    const  contextValue = {getTotalCartAmountItems,getTotalCartAmount,all_product,cartItem,addTocart,removeFromcart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
