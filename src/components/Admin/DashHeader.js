import React from "react"
import logo from '../logo/law.png'


const DashHeader=()=>{
	return(
	<header className="dash-header">
		<div id="logo">
	       <p> <span id="logo-text"> BidIt </span>
	           <span id="logo-img">
	           <img src={logo} alt="" height="50px"/>
	           </span>
            </p>
	     </div>
	</header>
		)
}
export default DashHeader;