import React from 'react' 
import './ItemDetails.css' 



class WonDetails extends React.Component{
	constructor(props){
    super(props);
    this.state={
        item:this.props.detailedItem,
        bid:0,
        isSignedIn:false,
        user:this.props.user
    }
}


render(){
	const {img,name,description,winningbid,winner,postedby,hours,days,minutes,sececondes}=this.state.item;
		return(
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

		</div>
		)
}

} export default WonDetails;






