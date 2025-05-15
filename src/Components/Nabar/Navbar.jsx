import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assests'
const Navbar = () => {
  return (
    <div className='navbar'>
         <img src={assets.sofresh_logo} alt=" logo" className='logo' /> 
            
         <ul className="navbar-menu">
               <li>Our Menu</li>
               <li>Find Us</li>
         </ul>
         <div className="navbar-right">
                  <img src={assets.search_icon} alt="" className='icon'/>
                      </div>
                      <button className='btn'>Order  Now</button>          
    </div>
  )
}

export default Navbar