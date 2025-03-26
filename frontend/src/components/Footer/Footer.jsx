import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>A2Z Mart-Khammam-Telangana</p>
            <div className="footer-social-icons">
                <a href=''><img src={assets.facebook_icon} alt="" /></a>
                <a href=''><img src={assets.twitter_icon} alt="" /></a>
                <a href=''><img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <a href=''><li>Home</li></a>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9666612142</li>
                <li>kurakuladeepak12@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © A2Z Mart.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
