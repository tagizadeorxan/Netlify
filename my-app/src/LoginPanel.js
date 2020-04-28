import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";


class LoginPanel extends Component {

state = {email:false,emailvalue:'', password:false,passwordvalue:''};

emailcheck = (e) => {
      let email = e.target.value;
      const correct = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = correct.test(email.toLowerCase()) === true ? this.setState({email:true,emailvalue:email}) : this.setState({email:false});
    return result;
}

passwordcheck = (e) => {
    let password = e.target.value;
    const correct = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    let result = correct.test(password) === true ? this.setState({password:true,passwordvalue:password}) : this.setState({password:false});
    return result;
}

login = (e) => {
    e.preventDefault();
    const {email,password} = this.state;
    console.log(email);
    console.log(password);
    let result = (email === true && password === true) ? true : false;
    return result;
}


register = (e) => {
    e.preventDefault();
    const {email,emailvalue,password,passwordvalue} = this.state;
    let result = (email === true && password === true) ? true : false;
    let register = result === true ? this.checkData(emailvalue,passwordvalue) : null; 
}


checkData = (emailvalue,passwordvalue)=> {
    fetch(`http://localhost:3000/getemail/${emailvalue}`).then(data=> data.json()).then(data => data.length<1 ? this.addData(emailvalue,passwordvalue) :alert(`sizin qeydiyyatiniz var`));
}



addData = (emailvalue,passwordvalue) => {
    console.log("working")
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({
            email: emailvalue,
            password: passwordvalue
        })
    };
    fetch("http://localhost:3000/register", options);



// fetch("http://localhost:3000/register", options).then( <Redirect
// to={{
//   pathname: "/home",
// //   state: { from: location }
// }}
// />).catch(err=>alert("this email is already registered"));

}



    render() {
       let {login,register} = this.state;
        
        return (
             <div>
                 <form>
                     <div className="labels">
                         <label htmlFor="email">Email: </label>
                         <label htmlFor="password">Password: </label>
                     </div>
                     <div className="inputs" >
                         
                         <input onChange={this.emailcheck} id="email" type="text"/>
                         <input onChange={this.passwordcheck} id="password" type="password"/>
                     </div>
                    
                     <button onClick={this.login}>Log in</button>
                     <button onClick={this.register}>Register</button>
                 </form>
                 <div className="info">* Please -> Input Password and Submit [6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter]</div>
             </div>
        )
    }
}

export default LoginPanel;