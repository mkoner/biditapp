import React from 'react'
import {Link} from "react-router-dom"
import logo from '../logo/law.png'
import './Header.css'

const Header=({isSignedIn,onSignIn})=>{
	
if(isSignedIn){
	return(
	<header>
	<div id="logo">
	<p> <span id="logo-text"> BidIt </span>
	<span id="logo-img">
	<img src={logo} alt="" height="50px"/>
	</span>
    </p>
	</div>
	<nav>
		<ul>
			<Link to="/items" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" > posted Items </li></Link>
			<Link to="/completeditems" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" > completed auctions </li></Link>
			<Link to="/post" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" > Post an Item </li></Link>
			<Link to="/profile" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item " id="move"> Profile </li></Link>
			<Link to="/" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" 
			 onClick={()=> onSignIn('signout')}>  Sign out </li></Link>
		</ul>
	</nav>
</header>
)
}
return(
<header>
	<div id="logo">
	<Link to="/items" style={{ textDecoration: 'none',color: 'inherit' }}>
	<p> <span id="logo-text"> BidIt </span>
	<span id="logo-img">
	<img src={logo} alt="" height="50px"/>
	</span>
    </p>
    </Link>
	</div>
	<nav>
		<ul>
		    <Link to="/items" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" > posted Items </li></Link>
			<Link to="/completeditems" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" > completed auctions </li></Link>
			<Link to="/post" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" > Post an Item </li></Link>
			<Link to="/profile" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item" id="move"> Profile </li></Link>
			<Link to="/signin" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item"> Singn In </li></Link>
			<Link to="/register" style={{ textDecoration: 'none',color: 'inherit' }}><li className="nav-item"> Register  </li></Link>
		</ul>
	</nav>
</header>

	)

		
}
export default Header; 