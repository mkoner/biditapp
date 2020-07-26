import React from 'react' 
import {Link} from 'react-router-dom'
import Login from '../login/Login'
import './ItemDetails.css' 



class ItemDetails extends React.Component{
	constructor(props){
    super(props);
    this.state={
        item:this.props.detailedItem,
        bid:0,
        isSignedIn:this.props.isSignedIn,
        user:this.props.user
    }
}
onNewBid=(evt)=>{
	this.setState({
		bid:evt.target.value
	})
}

render(){
	const {img,name,description,winningbid,winner,postedby,hours,days,minutes,sececondes}=this.state.item;
	if(this.state.isSignedIn)
{		return(
	
		<div className="detailsCard" >
		<p className="postedby">this item was posted by {postedby}</p>
		<img src={img} alt="item" />
		<h2>{name}</h2>
		<p className="description">
            <strong>Info:</strong>
			{description}
		</p>
		<p className="win"> 
			Highest bid:<span>{winningbid}</span> from {winner}
		</p>
		<br/>
		<p className="time">
					<span>{days} days {hours} hours {minutes} mins {sececondes} sec</span> to go
		</p>
		<form className="details">
			Make a bid
			<input className="bid" type="number" name="bid" placeholder="amount"  onChange={this.onNewBid}/> <br/>
			<Link to="/items"><button  className="button" id="bidsubmitbutton" type="button"   onClick={this.props.makeBid.bind(this,parseFloat(this.state.bid))}> Bid</button> </Link>
		</form>

		</div>
		

	
		)}
else
{
	return(
		
		<Login style={{marginBottom: '5rem'}} loadUser={this.props.loadUser} onSignIn={this.props.onSignIn}/>
		
		)
}
} 

} export default ItemDetails;






