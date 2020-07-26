import React from 'react'
import {Link} from "react-router-dom"
import './ItemCard.css'


const CompletedItemCard = ({product}) => {  

  
    const { name, img,winningbid,winner} = product;
    
	return(
    
  <div className="card" > 
   <Link to="/details" style={{ textDecoration: 'none',color: 'inherit' }} >
      <div className="img-container">
      <p>
        Congratulations to <span className="winner">{winner}</span>
      </p>
    <img src={img} alt="item" height="200px"/>
    </div>
   
     <div>
       <h4 id="item-title">{name}</h4> 
       
       <p>  Winning bid: <span className="spcard">{winningbid}</span>  </p> 
     </div>
     </Link>
    </div>
    
  
  )
}
export default CompletedItemCard;