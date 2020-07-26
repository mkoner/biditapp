import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import Login from '../login/Login'
import '../login/Login.css'


class PostItem extends React.Component{

 constructor(props){
    super(props);
    this.state={
        ItemName:'',
        ItemDescription:'',
        endDate:new Date(),
        photo:'',
        proof:'',
        isSignedIn:this.props.isSignedIn
    }
}

handleChange=(evt)=>{
    const {name,value}=evt.target;
    this.setState({
        [name]:value
    })
}
onChangeHandler=event=>{
    const {name,files}=event.target;
    this.setState({
      [name]:files[0]
    })
  }



onItemPost=()=>{


const { ItemName, endDate,photo,ItemDescription,proof } = this.state;
        let formData = new FormData();

        formData.append('name', ItemName);
        formData.append('endtime', endDate);
        formData.append('description', ItemDescription);
        formData.append('itemImage', photo);
        formData.append('itemProof', proof);
        formData.append('user', this.props.user.name);


        axios.post('https://agile-spire-08865.herokuapp.com/postitem', formData)
          .then((result) => {
            // access results...
          });

}

render(){
if(this.state.isSignedIn)
{
    return(
<div className="myform">
      <form>
     
     <input type="text" name="ItemName" placeholder="Product Name" onChange={this.handleChange}/>
     
     
     
     <textarea type="text" name="ItemDescription" placeholder="Product description" onChange={this.handleChange}/><br/>
     
     
    <label>Sellect last day for the auction:</label>
     <input type="datetime-local" name="endDate" placeholder="end of auction"  onChange={this.handleChange} />
     
     
     <br/>Upload a photo to describe the product:
     <input type="file" name="photo" onChange={this.onChangeHandler} />
  
    
     <br/>Upload a proof of ownership: 
     <input type="file" name="proof" onChange={this.onChangeHandler} />
    <br/>
    <Link to="/" style={{ textDecoration: 'none',color: 'inherit' }}><button onClick={this.onItemPost}> Post</button></Link>
 </form>
</div>
  )
} else {
    return(
        <Login style={{marginBottom: '5rem'}} loadUser={this.props.loadUser} onSignIn={this.props.onSignIn}/>
        )
}

	}
}


export default PostItem;