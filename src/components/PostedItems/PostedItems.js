import React from 'react';
import ItemCard from '../ItemCard/ItemCard'

export default function PostedItems(props){
	const Items=props.items.map(item=>
      <ItemCard key={item.id}  product={item} detailedItem={props.detailedItem}/>
     
    )
    
    
    return(
    	<div>
    	<h2>Posted Items</h2>
    	<div id="listed-items">
         {Items}
       </div>
       </div>
   	)

}

