import React from 'react'
import {Link} from "react-router-dom"
import './AdminSignIn.css'

class AdminSignIn extends React.Component{

constructor(props){
    super(props);
    this.state={
        signInEmail:'',
        signInPassword:'',
        isSignedIn:false
    }
}

handleChange=(evt)=>{
    const {name,value}=evt.target;
    this.setState({
        [name]:value
    })
}

onSubmition=()=>{
fetch('https://agile-spire-08865.herokuapp.com/adminsignin',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(
        {
        email:this.state.signInEmail,
        password:this.state.signInPassword
    })
}).then(response=>response.json()).then(
data=>{
    console.log(data)
    if (data[0].email){
        this.setState(Object.assign({ isSignedIn: true}))
    
    }
    else(
        document.getElementById("errorMessage").innerHTML="Error in signing in your password or email is wrong!"
        )
    
})

}

render(){
var ConditionalLink = this.state.isSignedIn ? Link : 'p';

    return(
<div className="admin-myform">
    <form className="admin-form-login">
        <h3>Login</h3>
        <p id='errorMessage'></p>
        <hr/>
        
            <input onChange={this.handleChange} type="text" name="signInEmail" placeholder="email" />
       

        
            <input onChange={this.handleChange} type="password" name="signInPassword" placeholder="password" />
        
           
            <button id="submitbutton" type="button" onClick={this.onSubmition}> 
            <ConditionalLink to="/dashhome">
             Log In
             </ConditionalLink>
             </button>
            
        
        <hr/>
    </form>
 </div>
  );
    

}
}

export default AdminSignIn;