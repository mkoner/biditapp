import React from "react"
import DashHeader from './DashHeader'
import DashNav from './DashNav'
import './Dashboard.css'


const DashHome=()=>{

	return(
		<article>
		<DashNav/>
		<div className="container">
		<DashHeader/>
		<div>
		     <p className="welcome">
			     Hi MKoner <br/> welcome to the admin dashboard
		     </p>
	    </div>
		</div>
		</article>
		)
} 
export default DashHome;