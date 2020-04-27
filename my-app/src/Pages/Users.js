import React from 'react';
import User from './User';

class Users extends React.Component {
    
    state = {users: []};
    componentDidMount() {
        this.getData();
    }

   addData = (e) => {
        let string = e.target.parentNode.childNodes[0].value;
       
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({
                title: string,
                body: 'New POST by Orxan'
            })
        };
        fetch("http://localhost:3000/addpost1", options);
   }

    getData = () => {
        fetch("https://5ea3c7e4270de6001645fbd1.mockapi.io/users").then(data=>data.json()).then(data=> this.setState({users:data}));
    }

    render(){
        const { users } = this.state;
        
         return(
             <>
           <div className="users">
                {users.map(user=> <User key={user.id} user={user}/>)}
           </div>
           <div>
           <input type="text"></input>
           <button onClick={this.addData}>Add data to mysql</button></div>
           </>
        )
    }
}

export default Users;