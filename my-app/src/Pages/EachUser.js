import React from 'react';

class EachUser extends React.Component {
state= {id:0,user:{}};
componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({id},()=> this.getData());
}

getData = () => {
    fetch(`https://5ea3c7e4270de6001645fbd1.mockapi.io/users/${this.state.id}`).then(data=>data.json()).then(data=>this.setState({user:data}));
}

    render() {
        console.log(this.props.match.params.id);
       return (
          <div className="user">
                  <img alt="id" src={`${this.state.user.avatar}`} />
               <p>{this.state.user.createdAt}</p>
               <p>{this.state.user.name}</p>         
               <button onClick={this.props.history.goBack}>go back</button>
          </div>
       )
    }
}

export default EachUser;