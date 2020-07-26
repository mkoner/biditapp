import React from 'react'

const ProfileDetails =(props)=>{

	const {name,bids,email,joined}=props.user;
	
	return(
		<div className='profile-card'>
			<h3> Hi {name}, welcome to your profile</h3>
			<p>
				your email:{email}<br/>
				date of joining:{joined.toString()}<br/>
				number of bids:{bids}
			</p>
		</div>
		)

}
export default ProfileDetails; 