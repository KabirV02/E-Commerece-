import React from 'react'
import './Footer.css'
import logo from '../Images/LOGO.png';
import whatsapp from '../Images/Icons/whatsapp.webp'
import instagram from '../Images/Icons/insta.png'
import pinterest from '../Images/Icons/pinterest.webp'
export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="footer-logo" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-contianer">
                <img src={instagram} alt="Instagram-Logo" />
            </div>
            <div className="footer-icon-contianer">
                <img src={pinterest} alt="Pintester-logo" />
            </div>
            <div className="footer-icon-contianer">
                <img src={whatsapp} alt="Whatsapp-logo" />
            </div>
           
        </div>
        <div className="footer-copyright">
                <hr />
                <p>
                    Copyright @ 2024 -All right reserved
                </p>
            </div>
    </div>
  )
}
