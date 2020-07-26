import React from "react"

const Scroll=(props)=>{
	return(
		<div style={{overflow:'scroll',height:window.innerHeight}} >
		{props.children}
		</div>
		)
}
export default Scroll;