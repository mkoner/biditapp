import React from 'react'
import {Link} from "react-router-dom"
import './ItemCard.css'


const ItemCard = ({product,detailedItem,isSignedIn}) => {  

  
    const {id, name, img,hours,days,minutes,secondes,winningbid,winner} = product;
    
	return(
    
  <div className="card"  onClick={()=>detailedItem(id)} > 
   <Link to="/details" style={{ textDecoration: 'none',color: 'inherit' }} >
      <div className="img-container">
    <img src={img} alt="item" height="200px"/>
    </div>
   
     <div>
       <h4 id="item-title">{name}</h4> 
       <p >
       {<span className="spcard"> 
               {days} days {hours} hours {minutes} mins {secondes}
                </span>} to go
        </p>
       <p>  heighest bid: <span className="spcard">{winningbid}</span> from {winner}</p> 
     </div>
     </Link>
    </div>
    
  
  )
}
export default ItemCard;