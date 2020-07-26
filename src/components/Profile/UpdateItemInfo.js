import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import '../login/Login.css'


class UpdateItemInfo extends React.Component{

 constructor(props){
    super(props);
    this.state={
        ItemDescription:'',
        endDate:'',
        photo:'',
        id:''
    }
}
componentDidMount(){
    this.setState({
        id:this.props.detailedItem.id
    })
}
handleChange=(evt)=>{
    const {name,value}=evt.target;
    this.setState({
        [name]:value
    })
}
onChangeHandler=event=>{
    this.setState({
      photo: event.target.files[0]
    })
  }



onItemPost=()=>{

const { id, endDate,photo,ItemDescription } = this.state;
        let formData = new FormData();

        formData.append('id', id);
        formData.append('endtime', endDate);
        formData.append('description', ItemDescription);
        formData.append('itemImage', photo);
        

 
        axios.post('https://agile-spire-08865.herokuapp.com/updateiteminfo', formData)
          .then((result) => {
            // access results...
          });

}

render(){
     console.log(this.state)
return(
<div className="myform">
  	<form>
 	<textarea type="text" name="ItemDescription" placeholder="Product description" onChange={this.handleChange}/><br/>
    <label>Sellect last day for the auction:</label>
 	<input type="date" name="endDate" placeholder="end of auction"  onChange={this.handleChange} />
 	<br/>Upload a photo to describe the product:
 	<input type="file" name="photo" onChange={this.onChangeHandler} />
    <br/>
    <Link to="/" style={{ textDecoration: 'none',color: 'inherit' }}><button onClick={this.onItemPost}> Post</button></Link>
 </form>
</div>
  )
	}
}

export default UpdateItemInfo;