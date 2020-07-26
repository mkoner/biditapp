import React from "react"
import DashHeader from './DashHeader'
import DashNav from './DashNav'
import Scroll from './Scroll'
import './Dashboard.css'


const  DashCompleted=(props)=>{
	const completed=props.items.map(item=>{
		return(<tr key={item.id}>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.postedby}</td>
					<td><a href={item.proof} target="blank">proof</a></td>
					<td> <a href={item.img} target="blank">image</a></td>
					<td>{item.winner}</td>
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
				<th>winner</th>
			</tr>
		 </thead>
		 <tbody>
			{completed}
		 </tbody>
		</table>
		</Scroll>
		</div>
		</article>
		)

}
export default DashCompleted;