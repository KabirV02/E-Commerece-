import React, { useState } from 'react'
import './CSS/login.css'
export default function Login() {

  const [state,setState] = useState("Login")

const [formData,setFormData] = useState({
  username:"",
  password:"",
  email:""
})


  const login = async ()=>{
    console.log("Login executed",formData)

    let responseData 
    await fetch('http://localhost:4000/login',{

      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/JSON'
      },
      body:JSON.stringify(formData),


    }).then((response)=>response.json()).then((data)=>responseData=data)
    
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token)
    window.location.replace("/shop")
  }
  else{
    alert(responseData.errors)
  }


    
  }
  
  const sign_up = async ()=>{
    console.log("Signup executed",formData)

    let responseData 
    await fetch('http://localhost:4000/signup',{

      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/JSON'
      },
      body:JSON.stringify(formData),


    }).then((response)=>response.json()).then((data)=>responseData=data)
    
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token)
    window.location.replace("/shop")
  }
  else{
    alert(responseData.errors)
  }

  }

  const changeHandler = (event)=>{
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  return (
    <div className='loginsignup'>
      <div className="login-contianer">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state ==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>} 
           <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your Email' />
           <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />

        </div>
        <button onClick={()=>{state ==="Login"?login():sign_up()}}>Continue</button>
        {state ==="Sign Up"? <p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("Login")}}>Login here</span></p>:<p className='loginsignup-login'>Create an account?<span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
       
 
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing , i agree to the terms of use & privacy policy</p>

        </div>
      </div>
    </div>
  )
}
