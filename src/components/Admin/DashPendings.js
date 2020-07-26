import React from "react"
import DashHeader from './DashHeader'
import DashNav from './DashNav'
import Scroll from './Scroll'
import './Dashboard.css'


const  DashPendings=(props)=>{
	const pendings=props.items.map(item=>{
		return(<tr  key={item.id}>


					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.postedby}</td>
					<td><a href={item.proof} target="blank">proof</a></td>
					<td> <a href={item.img} target="blank">image</a></td>
					<td><button onClick={props.activate.bind(this,item.id)}>Activate</button></td>
					<td><button onClick={props.delete.bind(this,item.id)}>Delete</button></td>
				</tr>)
	})
	return(
		<article>
		<DashNav/>
		<div className="container">
		<DashHeader/>
        <Scroll>
        	<table border="1">
        	 <thead>
			  <tr>
				<th>id</th>
				<th>name</th>
				<th>posted by</th>
				<th>proof</th>
				<th>image</th>
				<th>Activate</th>
				<th>Delete</th>
			  </tr>
			 </thead>
			 <tbody>
			{pendings}
			 </tbody>
		</table>
        </Scroll>
		</div>
		</article>
		)

}
export default DashPendings;