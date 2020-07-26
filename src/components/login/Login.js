import React from 'react'
import {Link} from "react-router-dom"
import './Login.css'

class Login extends React.Component{

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
fetch('https://agile-spire-08865.herokuapp.com/signin',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(
        {
        email:this.state.signInEmail,
        password:this.state.signInPassword
    })
}).then(response=>response.json()).then(
data=>{
    if (data.id){
        
         this.setState(Object.assign({ isSignedIn: true}))
         this.props.loadUser(data);
         this.props.onSignIn('signin')
    
    }
    else(
        document.getElementById("errorMessage").innerHTML="Error in signing in your password or email is wrong!"
        )
    
})

}
render(){
var ConditionalLink = this.state.isSignedIn ? Link : 'p';

    return(
<div className="myform">
    <form className="form-login">
        <h3>Login</h3>
        <p id='errorMessage'></p>
        <hr/>
        
            <input onChange={this.handleChange} type="text" name="signInEmail" placeholder="email" />
       

        
            <input onChange={this.handleChange} type="password" name="signInPassword" placeholder="password" />
        
           
            <button id="submitbutton" type="button" onClick={this.onSubmition}> 
            <ConditionalLink to="/" style={{ textDecoration: 'none',color: 'inherit' }}>
             Log In
             </ConditionalLink>
             </button>
            
        
        <hr/>
        don't have an account?
            <Link to="/register" style={{ textDecoration: 'none',color: 'inherit' }}>
            <button id="" type="button"> Register</button>
            </Link>

    </form>
 </div>
  );
    

}
}

export default Login;