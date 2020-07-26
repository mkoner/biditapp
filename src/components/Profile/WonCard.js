import React from 'react'
import {Link} from "react-router-dom"
import '../ItemCard/ItemCard.css'


const WonCard = ({product,detailedItem}) => {  

  
    const {id, name, img,winningbid,winner} = product;
    
	return(
    
  <div className="card" onClick={()=>detailedItem(id)}> 
   <Link to="/wondetails" style={{ textDecoration: 'none',color: 'inherit' }} >
      <div className="img-container">
    <img src={img} alt="item" height="140px"/>
    </div>
   
     <div>
       <h4 id="item-title">{name}</h4> 
       <p>  heighest bid: <span className="spcard">{winningbid}</span> from {winner}</p> 
     </div>
     </Link>
    </div>
    
  
  )
}
export default WonCard;