import React from 'react';
import Home from './Pages/Home';
import Users from './Pages/Users';
import About from './Pages/About';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import EachUser from './Pages/EachUser';




class MultiplePages extends React.Component {
    render() {
        return (
            <Router>

            <NavLink to='/home'>home</NavLink>
            <NavLink to ='/users'>users</NavLink>
            <NavLink to='/about'>about</NavLink>

            <Route exact path='/home'><Home/></Route>
            <Route exact path='/users'><Users/></Route>
            <Route exact path='/about'><About/></Route>
            <Route exact path='/users/:id' component={EachUser}></Route>

            </Router>
        )
    }
}

export default MultiplePages;