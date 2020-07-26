import React from 'react' 
import {Link} from 'react-router-dom'
import '../ItemDetails/ItemDetails.css' 


const PostedItemsDetails=(props)=>{
	const {img,name,description,winningbid,winner,postedby,hours,days,minutes,sececondes}=props.detailedItem;
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
		<form className="details">
			
			<Link to="/updateiteminfo"><button  className="button" id="bidsubmitbutton" type="button"> Update iten info</button> </Link>
		</form>

		</div>
		)
}

 export default PostedItemsDetails;






