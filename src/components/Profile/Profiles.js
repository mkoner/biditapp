import React from "react"
import ProfileDetails from './ProfileDetails'
import WonCard from './WonCard'
import PostedCard from './PostedCard'
import Login from '../login/Login'
import './Profile.css'



class Profiles extends React.Component{
constructor(props){
    super(props);
    this.state={
        posted:[],
        won:[],
        isSignedIn:this.props.isSignedIn
    }
}

componentDidMount(){
	fetch(`https://agile-spire-08865.herokuapp.com/won/${this.props.user.name}`).then(response => response.json()).then(data => {
    this.setState({
      won:data
    })});

    fetch(`https://agile-spire-08865.herokuapp.com/postedby/${this.props.user.name}`).then(response => response.json()).then(data => {
    this.setState({
      posted:data
    })});

}

render(){

 const wonbids=this.state.won.map(item=>
  <WonCard key={item.id}  product={item} detailedItem={this.props.detailedItem} />
   ) 
  

  const posteditems= this.state.posted.map(item=>
           <PostedCard key={item.id}  product={item} detailedItem={this.props.detailedItem} />
   )
     
  
if(this.state.isSignedIn)
{
  return(
        <div className='profile'>
        <ProfileDetails user={this.props.user} />
        <div id="won-items">
        <h4>your won items</h4>
         {wonbids}
       </div>
       <div id="posted-items">
        <h4>your posted items</h4>
         {posteditems}
       </div>
        </div>
          )
 } else{
  return(
    <Login style={{marginBottom: '5rem'}} loadUser={this.props.loadUser} onSignIn={this.props.onSignIn}/>
    )
 }
}

} export default Profiles;