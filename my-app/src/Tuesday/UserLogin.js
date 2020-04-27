import React, { Component } from 'react';

class UserLogin extends Component {

    state = { email: "", password: "" };

    check = (e) => {
        e.preventDefault();
        let email = e.target.parentNode.childNodes[1].value.slice(-3);
        let password = e.target.parentNode.childNodes[4].value.length;
        this.setState({ email: [email === '.az' ? "" : "only .az is acceptable"], password: [password > 8 ? "" : "must be more than 8 symbol"] });
    }


    render() {
        return (
            <div>
                <form className="form">
                    <label htmlFor="email">Email: </label>
                    <input onChange={this.check} id="email" />
                    <span style={{ color: "red" }}>{this.state.email}</span>
                    <label htmlFor="password">Password: </label>
                    <input onChange={this.check} id="password" type="password" />
                    <span style={{ color: "red" }}>{this.state.password}</span>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>


        )
    }
}

export default UserLogin;