import React from 'react';
import CompletedItemCard from '../ItemCard/CompletedItemCard'

export default function CompletedItems(props){
	const completedItems=props.items.map(item=>
      <CompletedItemCard key={item.id}  product={item}/>
     
    )
    
    return(
    	<div >
    	<h2>Completed Deals</h2>
    	<div id="listed-items">
         {completedItems}
       </div>
       </div>
   	)

}

