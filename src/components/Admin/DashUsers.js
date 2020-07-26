import React from "react"
import DashHeader from './DashHeader'
import DashNav from './DashNav'
import Scroll from './Scroll'
import './Dashboard.css'


const  DashUsers=(props)=>{
	const users=props.users.map(item=>{
		return(<tr key={item.id}>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.bids}</td>
					<td>{item.wonbids}</td>
					<td>{item.email}</td>
					<td>{item.joined}</td>
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
				<th>bids</th>
				<th>wonbids</th>
				<th>email</th>
				<th>joined</th>
			</tr>
			</thead>
			<tbody>
			{users}
			</tbody>
		</table>
		</Scroll>
		</div>
		</article>
		)

}
export default DashUsers;