import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/header/Footer'
import PostedItems from './components/PostedItems/PostedItems'
import Login from './components/login/Login'
import Register from './components/login/Register'
import PostItem from './components/postItem/PostItem'
import ItemDetails from './components/ItemDetails/ItemDetails'
import WonDetails from './components/ItemDetails/WonDetails'
import CompletedItems from './components/completedDeals/CompletedItems'
import Profiles from './components/Profile/Profiles'
import UpdateItemInfo from './components/Profile/UpdateItemInfo'
import PostedItemsDetails from './components/Profile/PostedItemsDetails'
import DashHome from './components/Admin/DashHome'
import DashUsers from './components/Admin/DashUsers'
import DashPendings from './components/Admin/DashPendings'
import DashActives from './components/Admin/DashActives'
import DashCompleted from './components/Admin/DashCompleted'
import AdminSignIn from './components/Admin/AdminSignIn'
import './App.css'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      isSignedIn:false,
      items:[],
      soldItems:[],
      pendingItems:[],
      activeItems:[],
      detailedItem:'' ,
      users:[],
      user:{
    id:"",
    name: "", 
    email:"" , 
    bids:0,
    joined: ""
      }
}
}
componentDidMount() { 
 setInterval(this.loadItems,1000);
}

loadItems=()=>{
    fetch('https://agile-spire-08865.herokuapp.com/items').then(response => response.json()).then(data => {
    this.setState({
      items:data
    })});
    this.state.items.forEach(item=>{
      var t=new Date(item.enddate).getTime()-new Date().getTime();
       if(t<=0){
        fetch(`https://agile-spire-08865.herokuapp.com/${item.id}`).then(response => response.json()).then(data => {
          
    });
      }
      else return item;
    })

    fetch('https://agile-spire-08865.herokuapp.com/solditems').then(response => response.json()).then(data => {
    this.setState({
      soldItems:data
    })});

    fetch('https://agile-spire-08865.herokuapp.com/pendingitems').then(response => response.json()).then(data => {
    this.setState({
      pendingItems:data
    })});

    fetch('https://agile-spire-08865.herokuapp.com/activeitems').then(response => response.json()).then(data => {
    this.setState({
      activeItems:data
    })});
    fetch('https://agile-spire-08865.herokuapp.com/users').then(response => response.json()).then(data => {
    this.setState({
      users:data
    })});

}

loadUser=(data)=>{
  this.setState({user:{
      id:data.id,
      name: data.name,
      email:data.email,
      bids:data.bids,
      joined:data.joined
    },
    isSignedIn:true
  })
  
}


onSignIn = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } 
    else 
       {
      this.setState({isSignedIn: true})
    } 
  }

   getItem = (id) => {
    const product = this.state.items.find(item=>  item.id === id);
    return product;
  }

  findDetailedItem=(id)=>{
   const product = this.getItem(id)
   this.setState(()=> {return {detailedItem: product}});
}


 getTimeRemaining = (endtime)=>{
  var countDownDate = new Date(endtime).getTime();
  var now = new Date().getTime();
  var t = countDownDate - now;
  var seconds = Math.floor( (t/1000) % 60 );
  var  minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
     seconds: seconds
  };
}


initializeClock=(item)=>{
   var timeinterval = setInterval(()=>{
     var t = this.getTimeRemaining(item.enddate);
     item.days=t.days;
     item.hours=t.hours;
     item.minutes=t.minutes;
     item.secondes=t.seconds;
     if(t.total<=0){
       clearInterval(timeinterval);
     }
     //console.log(item)
     return(item);
 
   },1000);
 }

makeBid=(bid)=>{   
  const {user,detailedItem}=this.state;
    fetch('http://localhost:3005/bid', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              uid:user.id,
              iid:detailedItem.id,
              bid:bid
            })
          })
            .then(response => response.json())
            .then(result => {
             
            })
}

  activate=(id)=>{
    fetch(`https://agile-spire-08865.herokuapp.com/activate/${id}`,{method:'put'}).then(response => response.json()).then(data => {
      console.log(data)
    })
  }
  delete=(id)=>{
    fetch(`https://agile-spire-08865.herokuapp.com/delete/${id}`,{method:'delete'}).then(response => response.json()).then(data => {
      console.log(data)
    })
  }



  render(){
    
     return(
      <Router>
       
       <Switch>
       <Route path="/items">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <PostedItems  detailedItem={this.findDetailedItem}  items={this.state.activeItems} />
       <Footer/>
       </Route>
       <Route path="/completeditems">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <CompletedItems items={this.state.soldItems} />
        <Footer/>
       </Route>
       <Route path="/profile">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <Profiles user={this.state.user} detailedItem={this.findDetailedItem} 
       isSignedIn={this.state.isSignedIn} loadUser={this.loadUser} onSignIn={this.onSignIn}/>
        <Footer/>
       </Route>
       <Route path="/updateiteminfo">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <UpdateItemInfo detailedItem={this.state.detailedItem}/>
        <Footer/>
       </Route>
       <Route path="/post">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <PostItem user={this.state.user} isSignedIn={this.state.isSignedIn} loadUser={this.loadUser} onSignIn={this.onSignIn}/>
        <Footer/>
       </Route>
       <Route path="/signin">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <Login loadUser={this.loadUser} onSignIn={this.onSignIn}/>
        <Footer/>
       </Route>
       <Route path="/register">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <Register loadUser={this.loadUser} onSignIn={this.onSignIn}/> 
        <Footer/>
       </Route>
       <Route path="/details">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <ItemDetails  detailedItem={this.state.detailedItem} makeBid={this.makeBid} user={this.state.user}
        isSignedIn={this.state.isSignedIn} loadUser={this.loadUser} onSignIn={this.onSignIn}/>
        <Footer/>
       </Route>
       <Route path="/wondetails">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <WonDetails  detailedItem={this.state.detailedItem} />
        <Footer/>
       </Route>
       <Route path="/posteditemdetails">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <PostedItemsDetails  detailedItem={this.state.detailedItem} />
        <Footer/>
       </Route>
       <Route path="/admin">
       <AdminSignIn/>
       </Route>
       <Route path="/dashhome">
       <DashHome/>
       </Route>
       <Route path="/dashusers">
       <DashUsers users={this.state.users}/>
       </Route>
       <Route path="/dashpendings">
       <DashPendings items={this.state.pendingItems} activate={this.activate}  delete={this.delete} />
       </Route>
       <Route path="/dashactives">
       <DashActives items={this.state.activeItems}/>
       </Route>
       <Route path="/dashcompleted"> 
       <DashCompleted items={this.state.soldItems}/>
       </Route>
       <Route path="/">
       <Header isSignedIn={this.state.isSignedIn} onSignIn={this.onSignIn}/>
       <PostedItems  detailedItem={this.findDetailedItem}  items={this.state.activeItems} />
       <CompletedItems items={this.state.soldItems} />
       <Footer/>
       </Route>
       </Switch>
      </Router>
      )
}
}

export default App;
   