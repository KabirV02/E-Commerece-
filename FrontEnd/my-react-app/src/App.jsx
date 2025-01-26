// App.js
import './App.css';
import Navbars from './Components/NAVBAR/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Footer from './Components/Footer/Footer';
import mens_banner from './Components/Images/Banners/mensBanner.png'
import womens_banner from './Components/Images/Banners/womenBanner.png'
import kids_banner from './Components/Images/Banners/kids.png'
function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path = '/' element = {<Shop/>}/>
        <Route path = '/shop' element = {<Shop/>}/>
        <Route path = '/mens' element = {<ShopCategory banner = {mens_banner} category = "mens"/>}/>
        <Route path = '/womens' element = {<ShopCategory banner = {womens_banner}  category = "womens"/>}/>
        <Route path = '/kids' element = {<ShopCategory banner = {kids_banner}  category = "kids"/>}/>
        <Route path = '/product' element = {<Product/>}> 
        <Route path = ':productId' element= {<Product/>}/>
        </Route>
        <Route path='/cart' element= {<Cart/>}/>
        <Route path = '/login' element = {<Login/>} />
          </Routes>
          <Footer/>
    </BrowserRouter>
  );
}

export default App;



