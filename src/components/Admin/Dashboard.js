import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DashHome from './DashHome'
import DashUsers from './DashUsers'
import DashPendings from './DashPendings'
import DashActives from './DashActives'
import DashCompleted from './DashCompleted'
import AdminSignIn from './AdminSignIn'


class Dashboard extends React.Component{
	constructor(){
		super()
		this.state={
			users:[],
			pendingItems:[],
			activeItems:[],
			completedDeals:[]
		}
	}

	render(){
		return(
			 <Router>
			 <AdminSignIn/>
			 <Switch>
			 <Route path="/dashhome">
			 <DashHome/>
			 </Route>
			 <Route path="/dashusers">
			 <DashUsers/>
			 </Route>
			 <Route path="/dashpendings">
			 <DashPendings/>
			 </Route>
			 <Route path="/dashactives">
			 <DashActives/>
			 </Route>
			 <Route path="/dashcompleted"> 
			 <DashCompleted/>
			 </Route>
			 </Switch>
			 </Router>
			)

	}
}
export default Dashboard;