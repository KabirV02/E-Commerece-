import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/LOGO.png';
import './navbar.css';
import { ShopContext } from '../../Context/ShopContext';


function Navbars() {
  const [menu, setMenu] = useState("Shop");
 const {getTotalCartAmountItems} = useContext(ShopContext)
 const menuref = useRef();

 function dropdown_toogle(e){

  menuref.current.classList.toggle('nav-menu-visible')
  e.target.classList.toggle('open')

 }

  return (
    <div className='navbar'>
      <div className='LOGO'>
        <img className='GYMLOGO' src={logo} alt="Your Gym Logo" />
        <h1>Shopper</h1>
      <i  onClick={dropdown_toogle}   className="fa-solid fa-caret-down fa-xl nav-drop-down"></i>
      </div>
      <div className='Links'>
        <ul className='lists' ref={menuref} >
        <li onClick={()=>{setMenu("Shop")}} ><Link to='/shop'>Shop</Link> {menu==="Shop"?<hr/>:<></>} </li>

          <li onClick={() => setMenu("Mens")}>
            <Link to='/mens'>Mens</Link>
            {menu === "Mens" ? <hr />:<></>}
          </li>
          <li onClick={() => setMenu("Women")}>
            <Link to='/womens'>Women</Link>
            {menu === "Women" ? <hr />:<></>}
          </li>
          <li onClick={() => setMenu("Kids")}>
            <Link to='/kids'>Kids</Link>
            {menu === "Kids" ? <hr />:<></>}
          </li>
        </ul>
      </div>

      <div className="login-cart">

        
        <div className="cart-icons">
     <div className='cart'>
        <Link to= '/cart'><i class="fa-solid fa-cart-shopping fa-2xl" style={{color:"#f06a6a",}}></i></Link>
        <div className='cart-count'>{getTotalCartAmountItems()}</div>
      </div>
      </div>
      <div className='LOGIN'>
       {localStorage.getItem('auth-token')?<button className='login' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/shop')}}>Logout</button>
       :<Link to='/login'> <button className='login'>Login/Signup</button></Link> 
}

      {/* <Link to='/login'> <button className='login'>Login/Signup</button></Link>  */}
      </div>
      </div>
    </div>
  );
}

export default Navbars;