import React from 'react';
import {Link} from 'react-router-dom';

class User extends React.Component {
   
    render () {
        return (
            <div className="user">
               <img alt="id" src={`${this.props.user.avatar}`} />
               <p>{this.props.user.createdAt}</p>
               <p>{this.props.user.name}</p>
               <Link to={`/users/${this.props.user.id}`}>show more</Link>
            </div>
        )
    }
}

export default User;