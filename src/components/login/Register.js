import React from 'react'
import {Link} from "react-router-dom" 
import './Login.css'


class Register extends React.Component{

 constructor(props){
    super(props);
    this.state={
        email:'',
        password:'',
        username:''
    }
}

handleChange=(evt)=>{
    const {name,value}=evt.target;
    this.setState({
        [name]:value
    })
}

onSubmition=()=>{
fetch('https://agile-spire-08865.herokuapp.com/register',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(
        {
        email:this.state.email,
        password:this.state.password,
        name:this.state.username
    })
}).then(response=>response.json()).then(
data=>{
         this.props.loadUser(data)
         this.props.onSignIn('signin')
    
    
})

}

    render(){
        return(
            <div className="myform">
    <form className="form-login">
        <h3>Register</h3>
        <hr/>
         
            <input onChange={this.handleChange} type="text" name="username" placeholder="your name" />
        
        
            <input onChange={this.handleChange} type="text" name="email" placeholder="email" />
       

       
            <input onChange={this.handleChange} type="password" name="password" placeholder="password" />
        
        
       
            <Link to="/" style={{ textDecoration: 'none',color: 'inherit' }}>
            <button id="submitbutton" type="button" onClick={this.onSubmition}> Register</button>
            </Link>
        
        <hr/>
    </form>
 </div>
 );
    }
}
export default Register;
