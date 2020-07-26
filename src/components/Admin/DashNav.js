import React from "react"
import {Link} from "react-router-dom"


const DashNav=()=>{
	return(
	<nav className="dash-nav">
		<ul className="dash-ul">
			<Link to="/dashpendings" style={{ textDecoration: 'none',color: 'inherit' }}><li className="dash-nav-item">Pending Posts</li></Link>
			<Link to="/dashactives" style={{ textDecoration: 'none',color: 'inherit' }}><li className="dash-nav-item">Active Posts</li></Link>
			<Link to="/dashcompleted" style={{ textDecoration: 'none',color: 'inherit' }}><li className="dash-nav-item"> Completed deals</li></Link>
			<Link to="/dashusers" style={{ textDecoration: 'none',color: 'inherit' }}><li className="dash-nav-item"> Users</li></Link>
		</ul>
	</nav>
	)
}
export default DashNav;