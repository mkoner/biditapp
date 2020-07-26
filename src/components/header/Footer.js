import React from 'react'
import {Link} from "react-router-dom"
import logo from '../logo/law.png'
import heart from '../icons/heart.png'
import email from '../icons/email.png'
import phone from '../icons/phone.png'
import './Footer.css'

const Footer=()=>{
  

  return(
  <footer>
  <div id="contacts">
    contacts:<br/>
      <img src={phone} alt="phone" height="30rem"/> not listed<br/>
      <img src={email} alt="email" height="30rem"/> not listed


  </div>
  <div id="logo">
   <Link to="/items" style={{ textDecoration: 'none',color: 'inherit' }}>
  <p> <span id="logo-text"> BidIt </span>
  <span id="logo-img">
  <img src={logo} alt="logo" height="50px"/>
  </span>
    </p>
   </Link>
 
 <p id="signature">
   Desined with   <img src={heart} alt="heart" height="25rem"/>
 By Mkoner
 </p>
  </div>
   <div id="sitemap">
  	sitemap:
  		<Link to="/items" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" > posted Items </li></Link>
			<Link to="/completeditems" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" > completed auctions </li></Link>
			<Link to="/post" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" > Post an Item </li></Link>
      <Link to="/profile" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item " id="move"> Profile </li></Link>

  </div>
</footer>
)
}
export default Footer; 